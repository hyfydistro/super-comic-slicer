import { ChangeEvent, ReactElement, useState, useRef } from 'react';
import { IAlertMessageContent, IDataImage, MESSAGE_TYPE } from '../../../../models/utils';
import { generateUniqueId as createId, totalFileSize, validateFileType, findFileSizeAlertMessageType } from "../../../../libs/utils";
import { ALERT_MESSAGE_TIMER, alertMessages } from '../../../../models/constants';

import "../../../../../public/assets/images/download.svg";

import "./Dropzone.scss";

type IProps = {
  data: IDataImage[];
  setData: React.Dispatch<React.SetStateAction<IDataImage[]>>;
  setShowAlertMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertMessageContent: React.Dispatch<React.SetStateAction<IAlertMessageContent>>;
};

function Dropzone({ data, setData, setShowAlertMessage, setAlertMessageContent }: IProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOnDrag, setIsOnDrag] = useState(false);

  function validateFilzeSize(fileSize: number): boolean {
    const typeOfAlertMessage = findFileSizeAlertMessageType(fileSize);
    if(typeOfAlertMessage === MESSAGE_TYPE.DANGER) {
      setShowAlertMessage(true);
      setAlertMessageContent({
        type: MESSAGE_TYPE.DANGER,
        message: alertMessages.onError.overMaxFileSize
      });
      setTimeout(() => setShowAlertMessage(false), ALERT_MESSAGE_TIMER);
      return false;
    }
    if (typeOfAlertMessage === MESSAGE_TYPE.WARNING) {
      setShowAlertMessage(true);
      setAlertMessageContent({
        type: MESSAGE_TYPE.WARNING,
        message: alertMessages.onWarning.nearMaxFileSize
      });
      setTimeout(() => setShowAlertMessage(false), ALERT_MESSAGE_TIMER);
    }
    return true;
  }

  function handleFileTypeAlertMessage() {
    setShowAlertMessage(true);
    setAlertMessageContent({
      type: MESSAGE_TYPE.DANGER,
      message: alertMessages.onError.unacceptableFileType
    });
    setTimeout(() => setShowAlertMessage(false), ALERT_MESSAGE_TIMER);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    e.stopPropagation();
    setIsOnDrag(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    e.stopPropagation();
    setIsOnDrag(false);
  }

  function handleClickToUpload(_e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    // Emulate HTML input click event
    inputRef.current?.click();
  }

  function handleFileUpdate(files: FileList | null) {
    // If ANY item found invalid, reject uploading all together
    if (!files) return;

    // Validate file type
    const isFileTypeValid = Object.values(files).some((file) => !validateFileType(file));
    if (isFileTypeValid) {
      handleFileTypeAlertMessage();
      return;
    }

    const editedData = Object.values(files).map((file) => ({
      fileRead: file,
      id: createId(),
      fileSize: file.size
    }));

    // Validate File Size
    const isValidFileSize = validateFilzeSize(totalFileSize([...editedData, ...data]));
    if (!isValidFileSize) return;

    setData([...data, ...editedData]);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): FileList | null {
    return e.target.files;
  }

  function handleFileDrop(e: React.DragEvent<HTMLDivElement>): FileList {
    handleDragLeave(e);
    return e.dataTransfer.files;
  }

  return (
    <div className="dropzone-container">
      <div
        className={`
          dropzone
          ${isOnDrag && "dropzone--highlight"}
        `}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDragEnd={(e) => handleDragLeave(e)}

        onDrop={(e) => handleFileUpdate(handleFileDrop(e))}
        onClick={(e) => handleClickToUpload(e)}
      >
      <img
        src="/assets/images/download.svg"
        alt="download"
        className="download-icon"
      />

      <p className="dropzone-text">
        Drag & Drop or Click here
        <br/>
        to upload your files (max. 20MB)
      </p>

      <input
        onChange={(e) => handleFileUpdate(handleInputChange(e))}
        className="dropzone__input"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        ref={inputRef}
      />

      </div>
    </div>
  );
}

export default Dropzone;