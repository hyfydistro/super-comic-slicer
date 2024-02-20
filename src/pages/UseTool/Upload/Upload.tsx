import { ReactElement, useState } from 'react';
import { IAlertMessageContent, IDataImage, MESSAGE_TYPE } from '../../../models/utils';

import Dropzone from './Dropzone/Dropzone';
import Preview from './Preview/Preview';
import StepTitle from '../../../components/StepTitle/StepTitle';
import AlertMessage from '../../../components/AlertMessage/AlertMessage';

import "./Upload.scss";

type IProps = {
  data: IDataImage[];
  setData: React.Dispatch<React.SetStateAction<IDataImage[]>>;
};

function Upload({ data, setData }: IProps): ReactElement {
  const [showAlertMessage, setShowAlertMessage,] = useState(false);
  const [alertMessageContent, setAlertMessageContent] = useState<IAlertMessageContent>({
    type: MESSAGE_TYPE.SUCCESS,
    message: ""
  });

  const totalFileSize = !!data.length && data.map((obj) => obj.fileSize).reduce((accumulator, currentValue) => accumulator + currentValue) || 0;

  return (
    <section className="upload-container">
        <StepTitle title="1. Upload" />
        <p>Currently, PNG and JPEG (including JPG) are accepted. If width of image is larger than height, it will be returned as
 is unless Options Squash chosen.</p>

      <Dropzone
        data={data}
        setData={setData}
        setShowAlertMessage={setShowAlertMessage}
        setAlertMessageContent={setAlertMessageContent}
      />

      {!!data.length &&
        (<Preview
          data={data}
          setData={setData}
          totalFileByte={totalFileSize}
          setShowAlertMessage={setShowAlertMessage}
          setAlertMessageContent={setAlertMessageContent}
        />)}

      {showAlertMessage &&
        (<AlertMessage
          message={alertMessageContent.message}
          type={alertMessageContent.type}
        />)}
    </section>
  );
}

export default Upload;