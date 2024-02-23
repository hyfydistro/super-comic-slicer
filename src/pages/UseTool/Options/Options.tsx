import { ReactElement, useState } from 'react';
import showHideTriangle from "../../../../public/assets/images/show-hide-triangle.svg";

import StepTitle from '../../../components/StepTitle/StepTitle';

import "./Options.scss";

function Options(): ReactElement {
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
              <p className="info-heading">File Extensions</p>
              <p className="info-content">PNG is a good choice for storing line drawings, text, and iconic graphics at a small file size. Unlike JPGs, which creat e a heavily compressed file and may blur images at a certain point, a PNG file will always look at least as sharp as the original image because of its “lossless” compression process.</p>

              <p className="info-heading">Squash</p>
              <p>Squash scale down image file size.</p>
              <p className="info-content">• If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.
          • if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.</p>

              <p className="info-heading">File Name Edits</p>
              <p className="info-content">• By default, image file names will be in ascending order start from 1. e.g. 01.png, 02.png, 03.png, etc.
          • Decide whether you would like extra text in file naming. e.g. example_00-draft-only.png</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;
