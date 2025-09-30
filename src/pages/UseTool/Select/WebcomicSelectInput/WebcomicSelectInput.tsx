import { ReactElement, MouseEvent } from 'react';
import { IWebcomicOption } from '../../../../models/utils';

import "./WebcomicSelectInput.scss";

type IProps = {
    webcomicOption: IWebcomicOption;
    handleSelectedWebcomic: (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
};

function WebcomicSelectInput({ webcomicOption, handleSelectedWebcomic }: IProps): ReactElement {
    const {
        htmlLabel,
        htmlAlt,
        name,
        imageSource,
        isDisabled
    } = webcomicOption;
  return (
    <div className="select-option">
      <label htmlFor={htmlLabel}>
          <div className="select-label--wrapper">
            {isDisabled ?
            (<input type="checkbox" id={htmlLabel} disabled />)
            : (<input
                type="checkbox"
                id={htmlLabel}
                value={htmlLabel}
                onClick={(e) => handleSelectedWebcomic(e)}
            />)}
              <span className="select-label">
                  <img className="select-icon" src={imageSource} alt={htmlAlt} />
                  <span className="select-text">{name}</span>
              </span>
          </div>
      </label>
  </div>
  );
}

export default WebcomicSelectInput;
