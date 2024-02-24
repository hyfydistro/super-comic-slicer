import { ReactElement } from 'react';

import InfoIcon from "../../../../../public/assets/images/info.svg";

function Squash(): ReactElement {
  return (
    <>
      <p className="info-heading">Squash</p>
      <p className="info-description">Squash scale down image file size.</p>
      <div className="info-content">
        <img className="info-icon" src={InfoIcon} alt="" />
        <p>
          • If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.
          • if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.
        </p>
      </div>
    </>
  );
}

export default Squash;