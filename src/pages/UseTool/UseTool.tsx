import { ReactElement, useState } from 'react';
import { IDataImage } from '../../models/utils';

import StepTitle from '../../components/StepTitle/StepTitle';
import Upload from './Upload/Upload';

import "./UseTool.scss";

function UseTool(): ReactElement {
  const [data, setData] = useState<IDataImage[]>([]);

  // TODOs
  // - webcomic platform checked
  // - file extension output
  // - squash level
  // - count total file size

  // Methods
  // - process results
  // - handle Slice Button

  return (
    <main>
      <article>
        <h1>Use Tool</h1>
        <Upload
          data={data}
          setData={setData}
        />

        <section>
          <StepTitle title="2. Select" />
          <p>Select webcomic platform to base slicing ratio. You may select more than one. *Currently, Webtoon is only available.</p>
        </section>

        <section>
          <StepTitle title="3. Options" />

          <p className="info-heading">File Extensions</p>
          <p className="info-content">PNG is a good choice for storing line drawings, text, and iconic graphics at a small file size. Unlike JPGs, which creat e a heavily compressed file and may blur images at a certain point, a PNG file will always look at least as sharp as the original image because of its “lossless” compression process.</p>

          <p className="info-heading">Squash</p>
          <p>Squash scale down image file size.</p>
          <p className="info-content">• If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.
  • if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.</p>

          <p className="info-heading">File Name Edits</p>
          <p className="info-content">• By default, image file names will be in ascending order start from 1. e.g. 01.png, 02.png, 03.png, etc.
  • Decide whether you would like extra text in file naming. e.g. example_00-draft-only.png</p>

        </section>
      </article>
    </main>
  );
}

export default UseTool;