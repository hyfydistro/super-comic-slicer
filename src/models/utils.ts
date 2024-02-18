
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
