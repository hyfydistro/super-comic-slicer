import { ReactElement, useState, MouseEvent } from 'react';
import { EDIT_TYPE, IDataImage } from '../../models/utils';

import Upload from './Upload/Upload';
import Select from './Select/Select';
import Options from './Options/Options';

import "./UseTool.scss";

function UseTool(): ReactElement {
  const [data, setData] = useState<IDataImage[]>([]);
  const [selectedWebcomics, setSelectedWebcomics] = useState<string[]>([]);
  const [fileExtension, setFileExtension] = useState<string>();
  const [squashLevel, setSquashLevel] = useState<number>(0);
  const [startFrom, setStartFrom] = useState<number>(0)
  const [suffix, setSuffix] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  // const [hasSelectFormError, setHasSelectFormError] = useState(false);

  // TODO
  // - set warning if incorrect input squash level

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

  // TODO Refactor 'handleSelectedFileExtension' and 'handleSelectedSquashLevel' are similar
  function handleSelectedFileExtension(value: string): void {
    // provide warning and unable to process with invalid value from custom pick

    setFileExtension(value);
  }

  function handleSelectedSquashLevel(value: string): void {
    setSquashLevel(Number(value));
  }

  function handleFileNameEdits(value: string, type: EDIT_TYPE): void {
    if (type === EDIT_TYPE.START_FROM) {
      setStartFrom(Number(value));
    }
    if (type === EDIT_TYPE.SUFFIX) {
      setSuffix(value);
    }
    if (type === EDIT_TYPE.PREFIX) {
      setPrefix(value);
    }
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
          handleSelectedSquashLevel={handleSelectedSquashLevel}
          handleFileNameEdits={handleFileNameEdits}
        />
      </article>
    </main>
  );
}

export default UseTool;