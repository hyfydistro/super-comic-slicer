import { ReactElement, useState } from 'react';
import InfoIcon from "../../../../../public/assets/images/info.svg";
import { alertMessages, squashLevelOptions } from '../../../../models/constants';
import { MESSAGE_TYPE } from '../../../../models/utils';

import RadioOption from '../../../../components/RadioOption/RadioOption';
import SquashCustom from './SquashCustom/SquashCustom';
import AlertMessage from '../../../../components/AlertMessage/AlertMessage';

import "./Squash.scss";

export const SQUASH_OPTION_COMMON_NAME = "squash";

type IProps = {
  handleSelectedSquashLevel: (value: string) => void;
};

function Squash({ handleSelectedSquashLevel }: IProps): ReactElement {
  const [hasWarning, setHasWarning] = useState(false);

  return (
    <div className="squash-container">
      <p className="info-heading">Squash</p>
      <p className="info-description">Squash scale down image file size.</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />

        <ul>
          <li>If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.</li>
          <li>if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.</li>
        </ul>
      </div>

      {squashLevelOptions.map(({ isCustom, pixelValue, label}, index) => isCustom
      ? (<div key={index} className="squash-option-wrapper">
        <SquashCustom
          handleSelectedSquashLevel={handleSelectedSquashLevel}
          setHasWarning={setHasWarning}
        />
        </div>)
      : (<RadioOption
            key={index}
            commonRadioGroupName={SQUASH_OPTION_COMMON_NAME}
            defaultCheckedValue={squashLevelOptions[0].pixelValue ? squashLevelOptions[0].pixelValue.toString() : "0"}
            value={pixelValue ? pixelValue.toString() : "0"}
            label={label ? label : ""}
            handleSelectedValue={handleSelectedSquashLevel}
        />))}

      {hasWarning && (
        <AlertMessage
          type={MESSAGE_TYPE.WARNING}
          message={alertMessages.onWarning.valueTooSmall}
        />
      )}
    </div>
  );
}

export default Squash;