import { forwardRef, useState } from 'react';
import { IDataImage } from '../../../../../models/utils';
import { convertByte } from '../../../../../libs/utils';

import removeButton from "../../../../../../public/assets/images/remove-btn.svg";

import "./Thumbnail.scss";

type IProps = {
  datum: IDataImage;
  removeSelf: ((id: number) => void);
  style: {
    transition: string | undefined;
    transform: string | undefined;
  };
  isDragging: boolean;
};

const Thumbnail = forwardRef<HTMLElement, IProps>(({datum,  removeSelf, style, isDragging, ...props }, ref) => {
  const [imageSource, setImageSource] = useState("");
  const {
    id,
    fileRead,
  } = datum;
  const name = fileRead.name;
  const size = convertByte(datum.fileSize);
  const reader = new FileReader();
  reader.readAsDataURL(fileRead);
  reader.addEventListener("load", () => {
    if (typeof reader.result == "string") {
      setImageSource(reader.result)
    }
  });

  return (
    <div
      className={`thumbnail-container ${isDragging && "onDrag"}`}
      ref={ref as (node: HTMLElement | null) => void}
      style={style}
      {...props}
    >
      <button
        className="remove-button"
        onClick={() => removeSelf(id)}
      >
        <img src={removeButton} alt="remove" />
      </button>

      <div className="thumbnail">
        <img src={imageSource} alt={name} />

        <div className="meta-container">
          <label>
            {name}
            <br />
            {size}
          </label>
        </div>
      </div>
    </div>
  )
});

export default Thumbnail;
