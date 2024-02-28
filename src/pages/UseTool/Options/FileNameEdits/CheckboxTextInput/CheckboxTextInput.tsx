import { ReactElement, useEffect, useRef, useState, ChangeEvent, MouseEvent, useCallback } from 'react';
import { EDIT_TYPE } from '../../../../../models/utils';

import "./CheckboxTextInput.scss";

type IProps = {
  label: string;
  example: string;
  editType: EDIT_TYPE;
  handleFileNameEdits: (value: string, editType: EDIT_TYPE) => void;
  regexPattern: RegExp;
};

function CheckboxTextInput({ label, example, editType, handleFileNameEdits, regexPattern }: IProps): ReactElement {
  const [value, setValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(true);

  const inputCheckboxRef = useRef<HTMLInputElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const simulateInputElementClickEvent = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    const targetElement = e.target as HTMLInputElement;

    if (editType === EDIT_TYPE.START_FROM) {
      if (targetElement.type !== "number") {
        setIsDisabled((current) => !current);
      }
    } else {
      if ((targetElement.type !== "text")) {
        setIsDisabled((current) => !current);
      }
    }
  }, []);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;
    const isValid = regexPattern.test(newValue);

    if (isValid) {
      setValue(newValue);
    }
  }

  useEffect(() => {
    if (isDisabled === false) {
      inputTextRef.current?.focus();
    }
  }, [isDisabled]);

  useEffect(() => {
    handleFileNameEdits(value, editType);
  }, [value]);

  return (
    <div className="checkbox-text-input-wrapper">
      <div
        className="checkbox-text-input"
        onClick={(e) => simulateInputElementClickEvent(e)}
      >
        <input
          ref={inputCheckboxRef}
          type="checkbox"
          checked={!isDisabled}
          readOnly
        />

        <span className="first-text">
          {label}
        </span>

        <input
          ref={inputTextRef}
          disabled={isDisabled}
          value={value}
          type={editType === EDIT_TYPE.START_FROM ? "number" : "text"}
          onChange={handleInputChange}
        />

        <span className="second-text">
          {example}
        </span>
      </div>
    </div>
  );
}

export default CheckboxTextInput;
