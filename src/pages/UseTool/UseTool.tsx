import { ReactElement, useState, MouseEvent, useRef } from 'react';
import { EDIT_TYPE, IDataImage, MESSAGE_TYPE } from '../../models/utils';
import { ALERT_MESSAGE_TIMER, alertMessages } from '../../models/constants';

import AlertMessage from '../../components/AlertMessage/AlertMessage';
import Upload from './Upload/Upload';
import Select from './Select/Select';
import Options from './Options/Options';
import Result from './Result/Result';

import "./UseTool.scss";
import Loader from '../../components/Loader/Loader';

function UseTool(): ReactElement {
  const [data, setData] = useState<IDataImage[]>([]);
  const [selectedWebcomics, setSelectedWebcomics] = useState<string[]>([]);
  const [fileExtension, setFileExtension] = useState<string>("jpeg");
  const [squashLevel, setSquashLevel] = useState<number>(0);
  const [startFrom, setStartFrom] = useState<number>(0)
  const [suffix, setSuffix] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [processedImages, setProcessedImaged] = useState<string[]>([]);
  // Alert Messages
  const [hasSelectFormError, setHasSelectFormError] = useState(false);
  const [hasDataError, setHasDataError] = useState(false);
  const [hasCompletedProcess, setHasCompletedProcess] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  function handleBeginSlice(e: MouseEvent): void {
    e.preventDefault();
    // - Check webcomic has been selected - mandatory
    // else send warning message
    // - default value for file extension option

    // check if there is any upload else warn no upload

    if (data.length === 0) {
      setHasDataError(true);
      setTimeout(() => setHasDataError(false), ALERT_MESSAGE_TIMER);
    }

    if (selectedWebcomics.length === 0) {
      // add warning - one must be selected
      setHasSelectFormError(true);
      setTimeout(() => setHasSelectFormError(false), ALERT_MESSAGE_TIMER);
    }

    // Animation
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);

    // begin processing data/results
    processResults();
  }

  // TODO
  // refactor function:
  // - saveAndDownload
  // - prcessResults
  // reason: too long!!

  async function saveAndDownloadFiles(
    fileExtension: string,
    processImages: string[],
    selectedWebcomics: string[],
    webcomicIndex: number
    ): Promise<void> {
      const JSZip = await import(/* webpackPrefetch: true */ "jszip");
      const fileSaver = await import(/* webpackPrefetch: true */ "file-saver");

      const JSZipConstructor = JSZip.default;
      const saveAs = fileSaver.default;

      const zip = new JSZipConstructor();
      const selectedFileExt = fileExtension;

      // NOTE: Naming is padded with zero of tens
      // Over tens are unavailable

      for (let i = 0; i < processImages.length; i++) {
          let fileName;
          if (i > 10) {
              fileName = `${i}.${selectedFileExt}`;
          } else {
              fileName = `${i.toString().padStart(2, "0")}.${selectedFileExt}`;
          }

          zip.file(fileName, processImages[i].substr(processImages[i].indexOf(',') + 1), { base64: true });
      }

      zip.generateAsync({ type: "blob", mimeType: "image/jpeg" })
          .then(function (blob) {

              saveAs(blob, `${selectedWebcomics[webcomicIndex]}.zip`);
          })
    }

  function processResults(): void {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = (canvasRef.current as HTMLCanvasElement).getContext("2d");
    if (!context) return;

    const rawSourceImages = document.querySelectorAll<HTMLImageElement>(".thumbnail img");
    // const sourceImages = data.map((datum) => datum.fileRead);
    const sourceImages = Array.from(rawSourceImages);

    // Process for each selected web comic
    selectedWebcomics.forEach((webcomicPlatform, index) => {
      let processImages: string[] = [];

      sourceImages.forEach((sourceImage) => {
        const imageWidth = sourceImage.naturalWidth;
        const imageHeight = sourceImage.naturalHeight;

        // CONDITION
        // Rotate if image width greater than height
        if (imageWidth > imageHeight) {
          canvas.width = imageHeight;
          canvas.height = imageWidth;
          context.rotate(Math.PI / 2);

          context.drawImage(sourceImage, 0, -(imageHeight));

        }

        const maxHeight = imageHeight;
        const width = imageWidth;

        let scaleWidth: number;
        switch(squashLevel) {
          case 0:
            scaleWidth = width;
            break;
          case 400:
              scaleWidth = 400;
              break;
          case 500:
              scaleWidth = 500;
              break;
          case 600:
              scaleWidth = 600;
              break;
          case 700:
              scaleWidth = 700;
              break;
          default:
              scaleWidth = squashLevel;
        }

        let webcomicMaxWidth: number = 0;
        let webcomicMaxHeight: number = 0;
        switch (webcomicPlatform) {
          case "webtoon":
              webcomicMaxWidth = 800;
              webcomicMaxHeight = 1280;
              break;
          case "tapas":
              webcomicMaxWidth = 960;
              webcomicMaxHeight = 1440;
              break;
        }

        const aspectRatio = webcomicMaxWidth / webcomicMaxHeight;
        // Based on aspect ratio, what the height should be...
        const determinedHeight = width / aspectRatio;

        let scaleDeterminedHeight = determinedHeight;
        if (scaleWidth !== width) {
          scaleDeterminedHeight = scaleWidth / aspectRatio;
        }

        // CONDITION
        // If file image naturalHeight is shorter than determinedHeight,
        // return as is... UNLESS Option scale applied
        if (determinedHeight > maxHeight) {
          const scaleMaxHeight = scaleWidth / (width / maxHeight);

          canvas.width = scaleWidth;
          canvas.height = scaleMaxHeight;

          context.drawImage(sourceImage, 0, 0, scaleWidth, scaleMaxHeight);

          const result = canvas.toDataURL();

          processImages.push(result);
        } else {
          let timesToSlice = Math.floor(maxHeight / determinedHeight);
          let currentSlice = 0;
          let newYPosition = 0;
          let slicedImages = [];

          // CONDITION
          // When longer length (height) images
          while (timesToSlice > currentSlice) {
            newYPosition = determinedHeight * currentSlice;

            canvas.width = scaleWidth;
            canvas.height = scaleDeterminedHeight;

            context.drawImage(
              sourceImage, 0, newYPosition, width, determinedHeight, 0, 0, scaleWidth, scaleDeterminedHeight
            );

            slicedImages.push(canvas.toDataURL());

            currentSlice++;
          }

          // CONDITION
          // For the odd number remaining
          // GET last coordinate
          // GET remaining height
          const remainCoordinateY = timesToSlice * determinedHeight;
          const remainHeight = maxHeight - remainCoordinateY;

          // OPTION Squash if available
          let scaleRemainHeight = remainHeight;
          if (scaleWidth !== width) {
            scaleRemainHeight = scaleWidth / (width / remainHeight);
          }

          if (remainHeight !== 0) {
            newYPosition = remainCoordinateY;

            canvas.width = scaleWidth;
            canvas.height = scaleRemainHeight;

            context.drawImage(
              sourceImage, 0, newYPosition, width, remainHeight, 0, 0, scaleWidth, scaleRemainHeight
            );

            slicedImages.push(canvas.toDataURL());
          }

          processImages.push(...slicedImages);
        }
      });

      // Creat ZIP folder
      // Name images with padded zero if under 10s
      // GET user file extension preference from Options from - File Extensions
      // PUSH images to Zip folder
      // DOwnload to user's PC
      saveAndDownloadFiles(fileExtension, processImages, selectedWebcomics, index).then(() => {
        if (selectedWebcomics.indexOf(selectedWebcomics[index]) == selectedWebcomics.indexOf(selectedWebcomics[selectedWebcomics.length - 1])) {
          // ALERT MESSAGE
          // "process is complete!"
          setHasCompletedProcess(true);
          setTimeout(() => setHasCompletedProcess(false), ALERT_MESSAGE_TIMER);
        }
      });

      // Add image 'data' url arr of processed image files
      // to display in 'Result' component
      setProcessedImaged(processImages);
    });
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

        <div className="slice-btn-container">
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="slice-btn"
              onClick={handleBeginSlice}
            >
              Begin Slice!
            </button>
          )}
        </div>



      {/* ALERT MESSAGES HERE */}
      {hasDataError && (
        <AlertMessage
          type={MESSAGE_TYPE.DANGER}
          message={alertMessages.onError.noFilesFound}
        />
      )}

      {hasSelectFormError && (
        <AlertMessage
          type={MESSAGE_TYPE.DANGER}
          message={alertMessages.onError.selectFormMandatory}
        />
      )}

      {hasCompletedProcess && (
        <AlertMessage
          type={MESSAGE_TYPE.SUCCESS}
          message={alertMessages.onSuccess.completedProcess}
        />
      )}

        <Result
          canvasRef={canvasRef}
          processedImages={processedImages}
        />
      </article>
    </main>
  );
}

export default UseTool;