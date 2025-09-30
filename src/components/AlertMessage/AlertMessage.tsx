import { ReactElement } from 'react';
import { MESSAGE_TYPE } from '../../models/utils';

import successIcon from "../../../public/assets/images/success.svg";
import warningIcon from "../../../public/assets/images/warning.svg";
import dangerIcon from "../../../public/assets/images/danger.svg";

import "./AlertMessage.scss";

type IProps = {
  message: string;
  type: MESSAGE_TYPE;
};

function AlertMessage({message, type}: IProps): ReactElement {

  function getStatus(): { icon: string, style: string } {
    switch(true) {
      case type === MESSAGE_TYPE.SUCCESS:
        return { icon: successIcon, style: "alert-message--success" };
      case type === MESSAGE_TYPE.WARNING:
        return { icon: warningIcon, style: "alert-message--warning" };
      default:
      // type === MESSAGE_TYPE.DANGER
        return { icon: dangerIcon, style: "alert-message--danger" };
    }
  }

  return (
    <div className={`alert-message-container ${getStatus().style}`}>
      <img
        src={getStatus().icon}
        alt=""
        className="message-icon"
      />
      <p className="message-text">{message}</p>
    </div>
  );
}

export default AlertMessage;
