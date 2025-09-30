import { ReactElement } from 'react';

import symbolIcon from "../../../public/assets/images/list-icon.svg";

import "./StepTitle.scss";

type IProps = {
  title: string;
};

function StepTitle({ title }: IProps): ReactElement {
  return (
    <div className="step-title">
      <img
        src={symbolIcon}
        alt=""
        className="step-icon"
      />
      <h2>{title}</h2>
    </div>
  );
}

export default StepTitle;