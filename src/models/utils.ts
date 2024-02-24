
export type IDataImage = {
  fileRead: File;
  id: number;
  fileSize: number;
}

export enum MESSAGE_TYPE {
  SUCCESS,
  WARNING,
  DANGER
};

export type IAlertMessageContent = {
  type: MESSAGE_TYPE;
  message: string;
}

export type IWebcomicOption = {
  htmlLabel: string;
  htmlAlt: string;
  imageSource: string;
  name: string;
  isDisabled: boolean;
};

export type IFileExtenionOption = {
  type: string;
  label: string;
};
