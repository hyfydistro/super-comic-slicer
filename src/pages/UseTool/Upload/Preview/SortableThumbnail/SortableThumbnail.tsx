import { ReactElement } from 'react';
import { IDataImage } from '../../../../../models/utils';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Thumbnail from '../Thumbnail/Thumbnail';

type IProps = {
  datum: IDataImage;
  index: number;
  removeSelf: (id: number) => void;
};

function SortableItem({ datum, index, removeSelf }: IProps): ReactElement {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: datum.id})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };

  return (
    <Thumbnail
      datum={datum}
      removeSelf={removeSelf}

      // dnd required attributes
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      isDragging={isDragging}
    />
  );
}

export default SortableItem;