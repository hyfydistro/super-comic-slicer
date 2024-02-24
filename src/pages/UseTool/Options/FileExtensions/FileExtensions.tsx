import { ReactElement, MouseEvent } from 'react';
import InfoIcon from "../../../../../public/assets/images/info.svg";
import { filExtensionOptions } from '../../../../models/constants';

import FileExtensionOption from './FileExtensionOption/FileExtensionOption';

import "./FileExtensions.scss";

type IProps = {
  handleSelectedFileExtension: (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
};

function FileExtensions({ handleSelectedFileExtension }: IProps): ReactElement {
  return (
    <div className="file-extension-container">
      <p className="info-heading">File Extensions</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />
        <p>PNG is a good choice for storing line drawings, text, and iconic graphics at a small file size. Unlike JPGs, which creat e a heavily compressed file and may blur images at a certain point, a PNG file will always look at least as sharp as the original image because of its “lossless” compression process.</p>
      </div>

      {filExtensionOptions.map(({ type, label }, index) => (
        <div className="radio-option-wrapper" key={index}>
          <FileExtensionOption
            type={type}
            label={label}
            handleSelectedFileExtension={handleSelectedFileExtension}
          />
        </div>
      ))}
    </div>
  );
}

export default FileExtensions;