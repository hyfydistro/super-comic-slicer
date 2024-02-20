import { ReactElement, useState } from 'react';
import { IAlertMessageContent, IDataImage, MESSAGE_TYPE } from '../../../../models/utils';
import { convertByte } from '../../../../libs/utils';
import { ALERT_MESSAGE_TIMER, alertMessages } from '../../../../models/constants';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, KeyboardSensor, PointerSensor, TouchSensor, UniqueIdentifier, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import SortableThumbnail from './SortableThumbnail/SortableThumbnail';

import "./Preview.scss";

type IProps = {
  data: IDataImage[];
  setData: React.Dispatch<React.SetStateAction<IDataImage[]>>;
  totalFileByte: number;
  setShowAlertMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertMessageContent: React.Dispatch<React.SetStateAction<IAlertMessageContent>>;
};

function Preview({ data, setData, totalFileByte, setShowAlertMessage, setAlertMessageContent }: IProps): ReactElement {
  const [activeId, setActiveId] = useState<UniqueIdentifier|null>(null);

  const sensorsInterfaceAccess = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function getDatumPosition(id: UniqueIdentifier): number {
    return data.findIndex(datum => datum.id === id);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
     const { active, over } = event;

     if (active.id === over?.id) return;

     setData((currentData) => {
      const originalPos = getDatumPosition(active.id);
      const newPos = getDatumPosition(over!.id);

      return arrayMove(currentData, originalPos, newPos);
     });

     setActiveId(null);
  }

  function handlDragCancel() {
    setActiveId(null);
  }

  function handleRemoveSelf(id: number) {
    const items = Array.from(data).filter((datum) => datum.id !== id); // shallow copy
    setData(items);
  }

  function clearData(): void {
    setData([]);
    setShowAlertMessage(true);
    setAlertMessageContent({
      type: MESSAGE_TYPE.SUCCESS,
      message: alertMessages.onSuccess.filesRemoved
    });
    setTimeout(() => setShowAlertMessage(false), ALERT_MESSAGE_TIMER);
  }

  return (
    <>
      <p>If you have more than one image file, you may drag and re-order.</p>

      <div className="preview-container">
        <DndContext
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handlDragCancel}
          sensors={sensorsInterfaceAccess}
        >
          <SortableContext items={data} strategy={rectSortingStrategy}>
            <div className="preview">
              {data.map((datum, index) => (
                <SortableThumbnail
                  key={datum.id}
                  datum={datum}
                  index={index}
                  removeSelf={handleRemoveSelf}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        <div className="clear-btn-container">
          <div className="file-size-container">
            <span className="file-size-text">
              {`Total File Size: ${convertByte(totalFileByte)}`}
            </span>
          </div>

          <button
            className="clear-btn"
            onClick={clearData}
          >
            Clear Files
          </button>
        </div>
      </div>
    </>
  );
}

export default Preview;
