import { ReactElement, useState, MouseEvent } from 'react';
import { IDataImage } from '../../models/utils';

import Upload from './Upload/Upload';
import Select from './Select/Select';
import Options from './Options/Options';

import "./UseTool.scss";

function UseTool(): ReactElement {
  const [data, setData] = useState<IDataImage[]>([]);
  const [selectedWebcomics, setSelectedWebcomics] = useState<string[]>([]);
  const [fileExtension, setFileExtension] = useState<string>();
  // const [hasSelectFormError, setHasSelectFormError] = useState(false);

  // TODOs
  // - webcomic platform checked
  // - file extension output
  // - squash level
  // - count total file size

  // Methods
  // - process results
  // - handle Slice Button

  function handleSelectedWebcomic(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>): void {
    const selectedWebcomicValue = (e.target as HTMLInputElement).value;

    if (selectedWebcomics.includes(selectedWebcomicValue)) {
      // UNCHECK INPUT
      setSelectedWebcomics((current) => current.filter((value) => value !== selectedWebcomicValue));
    } else {
      //CHECK INPUT
      setSelectedWebcomics((current) => ([...current, selectedWebcomicValue]));
    }
  }

  function handleSelectedFileExtension(e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>): void {
    const newSelectedFileExtension = (e.target as HTMLInputElement).value;

    setFileExtension(newSelectedFileExtension);
  }

  function handleBeginSlice(): void {
    // - Check webcomic has been selected - mandatory
    // else send warning message
    // - default value for file extension option
  }

  return (
    <main>
      <article>
        <h1>Use Tool</h1>

        <Upload
          data={data}
          setData={setData}
        />

        <Select
          handleSelectedWebcomic={handleSelectedWebcomic}
          // ! TOOD [POSTPHONE]
          // Ready when working on Slice Button component
          hasSelectFormError={false}
        />

        <Options
          handleSelectedFileExtension={handleSelectedFileExtension}
        />
      </article>
    </main>
  );
}

export default UseTool;