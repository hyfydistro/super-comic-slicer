import { ReactElement } from 'react';
import InfoIcon from "../../../../../public/assets/images/info.svg";
import { filExtensionOptions } from '../../../../models/constants';

import RadioOption from '../../../../components/RadioOption/RadioOption';

import "./FileExtensions.scss";

const FILE_EXTENSION_COMMON_NAME = "fileType";

type IProps = {
  handleSelectedFileExtension: (value: string) => void;
};

function FileExtensions({ handleSelectedFileExtension }: IProps): ReactElement {
  return (
    <div className="file-extension-container">
      <p className="info-heading">File Extensions</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />
        <p>PNG is a good choice for storing line drawings, text, and iconic graphics at a small file size. Unlike JPGs, which creat e a heavily compressed file and may blur images at a certain point, a PNG file will always look at least as sharp as the original image because of its “lossless” compression process.</p>
      </div>

      {filExtensionOptions.map(({type, label}, index) => (
        <RadioOption
          key={index}
          commonRadioGroupName={FILE_EXTENSION_COMMON_NAME}
          defaultCheckedValue={filExtensionOptions[0].type}
          value={type}
          label={label}
          handleSelectedValue={handleSelectedFileExtension}
        />
      ))}
    </div>
  );
}

export default FileExtensions;