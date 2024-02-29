import { ReactElement, useState, MouseEvent } from 'react';
import showHideTriangle from "../../../../public/assets/images/show-hide-triangle.svg";
import { EDIT_TYPE } from '../../../models/utils';

import StepTitle from '../../../components/StepTitle/StepTitle';
import FileExtensions from './FileExtensions/FileExtensions';
import FileNameEdits from './FileNameEdits/FileNameEdits';
import Squash from './Squash/Squash';

import "./Options.scss";

type IProps = {
  handleSelectedFileExtension: (value: string) => void;
  handleSelectedSquashLevel: (value: string) => void;
  handleFileNameEdits: (value: string, type: EDIT_TYPE) => void;
};

function Options({ handleSelectedFileExtension, handleSelectedSquashLevel, handleFileNameEdits }: IProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="options-container">
      <div className={`options-header ${isOpen && "remove-border"}`}>
        <StepTitle title="3. Options" />
        <div
          className="show-hide-btn"
          onClick={() => setIsOpen((currentState) => !currentState)}
        >
          <p>{isOpen ? "Hide" : "Show"}</p>
          <img
            className={isOpen ? "rotate" : ""}
            src={showHideTriangle}
            alt=""
          />
        </div>
      </div>

      <div className={`options-content-wrapper ${isOpen && "open"}`}>
        <div>
          <div className="options-content" >
            <FileExtensions
              handleSelectedFileExtension={handleSelectedFileExtension}
            />

            <Squash
              handleSelectedSquashLevel={handleSelectedSquashLevel}
            />

            {/* // TODO PHASE #2 */}
            {/* <FileNameEdits
              handleFileNameEdits={handleFileNameEdits}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;
