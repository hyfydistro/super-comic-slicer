import { ReactElement } from 'react';
import { FileNameOption } from '../../../../models/constants';
import { EDIT_TYPE } from '../../../../models/utils';

import InfoIcon from "../../../../../public/assets/images/info.svg";
import CheckboxTextInput from './CheckboxTextInput/CheckboxTextInput';

import "./FileNameEdits.scss";

type IProps = {
  handleFileNameEdits: (value: string, type: EDIT_TYPE) => void;
};

function FileNameEdits({ handleFileNameEdits }: IProps): ReactElement {
  return (
    <div className="file-name-edits-container">
      <p className="info-heading">File Name Edits</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />

        <ul>
          <li>By default, image file names will be in ascending order start from 1. e.g. 01.png, 02.png, 03.png, etc.</li>
          <li>Decide whether you would like extra text in file naming. e.g. example_00-draft-only.png</li>
          <li>Only alphabet characters and numbers allowed. *"Start form" only allow numbers.</li>
        </ul>
      </div>

      {FileNameOption.map(({ label, example, editType, regexPattern }, index) => (
        <CheckboxTextInput
          key={index}
          label={label}
          example={example}
          editType={editType}
          handleFileNameEdits={handleFileNameEdits}
          regexPattern={regexPattern}
        />
      ))}
    </div>
  );
}

export default FileNameEdits;
