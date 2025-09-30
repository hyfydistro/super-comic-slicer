import { ReactElement, useRef } from 'react';

import "./RadioOption.scss";

type IProps = {
  commonRadioGroupName: string;
  defaultCheckedValue: string;
  value: string;
  label: string;
  handleSelectedValue: (value: string) => void;
};

function RadioOption({
  commonRadioGroupName,
  defaultCheckedValue,
  value,
  label,
  handleSelectedValue
}: IProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="radio-option-wrapper">
      <div className="radio-option" onClick={() => inputRef.current?.click()}>
        <label htmlFor={label} />
        <input
          className="radio-input"
          ref={inputRef}
          defaultChecked={value === defaultCheckedValue}
          type="radio"
          name={commonRadioGroupName}
          value={value}
          id={label}
          onClick={(e) => handleSelectedValue((e.target as HTMLInputElement).value)}
        />
        <p className="radio-label">{label}</p>
      </div>
    </div>
  );
}

export default RadioOption;
