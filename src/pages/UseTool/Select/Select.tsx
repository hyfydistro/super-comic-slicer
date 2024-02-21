import { ReactElement } from 'react';

import StepTitle from '../../../components/StepTitle/StepTitle';

function Select(): ReactElement {
  return (
  <section className="select-container">
      <StepTitle title="2. Select" />
      <p>Select webcomic platform to base slicing ratio. You may select more than one. *Currently, Webtoon is only available.</p>
  </section>
  );
}

export default Select;