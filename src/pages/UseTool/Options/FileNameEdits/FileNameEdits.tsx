import { ReactElement } from 'react';

import InfoIcon from "../../../../../public/assets/images/info.svg";

function FileNameEdits(): ReactElement {
  return (
    <>
      <p className="info-heading">File Name Edits</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />
        <ul>
          <li>By default, image file names will be in ascending order start from 1. e.g. 01.png, 02.png, 03.png, etc.</li>
          <li>Decide whether you would like extra text in file naming. e.g. example_00-draft-only.png</li>
        </ul>
      </div>
    </>
  );
}

export default FileNameEdits;