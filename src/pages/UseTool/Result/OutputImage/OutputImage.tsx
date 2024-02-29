import { ReactElement } from 'react';

import "./OutputImage.scss";

type IProps = {
  imgSrc: string;
};

function OutputImage({ imgSrc }: IProps): ReactElement {
  return (
    <div className="output-image">
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default OutputImage;
