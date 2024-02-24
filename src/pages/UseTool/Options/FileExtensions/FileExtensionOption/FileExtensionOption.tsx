import { ReactElement, MouseEvent, useRef } from 'react';

import "./FileExtensionOption.scss";

type IProps = {
  type: string;
  label: string;
  handleSelectedFileExtension: (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
};

function FileExtensionOption({ type, label, handleSelectedFileExtension }: IProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  function simulateInputElementClickEvent(): void {
    inputRef.current?.click();
  }

  return (
    <div className="radio-option" onClick={simulateInputElementClickEvent}>
      <label htmlFor={label} />
      <input
        ref={inputRef}
        defaultChecked={type === "jpeg"}
        type="radio"
        name="fileType"
        value={label}
        id={label}
        onClick={handleSelectedFileExtension}
      />
      <p className="select-text">{label}</p>
    </div>
  );
}

export default FileExtensionOption;
