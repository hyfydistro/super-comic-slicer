import { ReactElement, MouseEvent } from 'react';
import { alertMessages, webcomicOptions } from '../../../models/constants';
import { MESSAGE_TYPE } from '../../../models/utils';

import StepTitle from '../../../components/StepTitle/StepTitle';
import WebcomicSelectInput from './WebcomicSelectInput/WebcomicSelectInput';
import AlertMessage from '../../../components/AlertMessage/AlertMessage';

import "./Select.scss";

type IProps = {
  handleSelectedWebcomic: (e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void;
  hasSelectFormError: boolean;
};

function Select({ handleSelectedWebcomic, hasSelectFormError }: IProps): ReactElement {
  return (
  <section className="select-container">
      <StepTitle title="2. Select" />
      <p>Select webcomic platform to base slicing ratio. You may select more than one. *Currently, Webtoon is only available.</p>

      <div className="select-container">
        {webcomicOptions.map((webcomicOption, index) => (<WebcomicSelectInput
          key={index}
          webcomicOption={webcomicOption}
          handleSelectedWebcomic={handleSelectedWebcomic}
        />))}
      </div>

      {hasSelectFormError &&
      (<AlertMessage
        type={MESSAGE_TYPE.DANGER}
        message={alertMessages.onError.selectFormMandatory}
      />)}

  </section>
  );
}

export default Select;
