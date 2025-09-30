import { ReactElement, RefObject } from 'react';

import StepTitle from '../../../components/StepTitle/StepTitle';
import OutputImage from './OutputImage/OutputImage';

import "./Result.scss";

type IProps = {
  canvasRef: RefObject<HTMLCanvasElement>;
  processedImages: string[];
};

function Result({ canvasRef, processedImages }: IProps): ReactElement {
  return (
    <section className="result-container">
      <StepTitle title="Results" />
      <p>
        For each webcomic platform selected, a zip file will be automatically downloaded after slicing process completed.
      </p>

      <canvas ref={canvasRef} id="canvas" />
      <div className="result">
        {processedImages.map((imgSrc, index) => (
          <OutputImage key={index} imgSrc={imgSrc} />
        ))}
      </div>
    </section>
  );
}

export default Result;