import { ReactElement, useRef, useState, ChangeEvent, useEffect } from 'react';
import { SQUASH_OPTION_COMMON_NAME } from '../Squash';
import { ALERT_MESSAGE_TIMER } from '../../../../../models/constants';
import useDebounce from '../../../../../hooks/useDebounce';

import "./SquashCustom.scss";

const THROTTLE_TIME = 4000;

type IProps = {
  handleSelectedSquashLevel: (value: string) => void;
  setHasWarning: React.Dispatch<React.SetStateAction<boolean>>;
};

function SquashCustom({ handleSelectedSquashLevel, setHasWarning }: IProps): ReactElement {
  const [value, setValue] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const inputRadioRef = useRef<HTMLInputElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);

  useDebounce(
    handleWarning,
    [value],
    THROTTLE_TIME
  );

  function simulateInputElementClickEvent(): void {
    const radioElement = inputRadioRef.current;
    radioElement?.click();
    setIsDisabled(!radioElement?.checked);
    handleSelectedSquashLevel(value.toString() || "0");
  }

  function handleWarning(): void {
    if (isDisabled) return;
    if (value < 0 || value < 400) {
      setHasWarning(true)
      setTimeout(() => setHasWarning(false), ALERT_MESSAGE_TIMER);
    }
  }

  useEffect(() => {
    handleSelectedSquashLevel(value.toString())
  }, [value]);

  useEffect(() => {
    if (inputRadioRef.current?.checked === false) {
      setIsDisabled(true)
    }
    inputTextRef.current?.focus();
  }, [inputRadioRef.current?.checked]);

  return (
    <div className="radio-option-custom-wrapper">
      <div className="radio-option-custom" onClick={simulateInputElementClickEvent}>
        <input
          className="radio-option-custom-radio"
          ref={inputRadioRef}
          id="none"
          value={value}
          name={SQUASH_OPTION_COMMON_NAME}
          type="radio"
        />

        <span className="first-text">
          Custom
        </span>

        <input
          className="radio-option-custom-input"
          ref={inputTextRef}
          disabled={isDisabled}
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <span className="second-text">
          width pixels
        </span>
      </div>
    </div>
  );
}

export default SquashCustom;
