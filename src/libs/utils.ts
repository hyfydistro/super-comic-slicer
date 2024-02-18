import { MAX_FILE_SIZE, NEAR_MAX_FILE_SIZE, fileTypes } from "../models/constants";
import { IDataImage, MESSAGE_TYPE } from "../models/utils";

export function generateUniqueId() {
  if (window.crypto && window.crypto.getRandomValues) {
      return window.crypto.getRandomValues(new Uint32Array(1))[0];
  } else {
      return Math.random()
  }
}

export function convertByte(bytes: number): string {
  const byteMax: number = 1024;
  const kilobyteMax: number = 1048576;

  switch(true) {
    case bytes < byteMax:
      return bytes + 'bytes';
    case bytes >= byteMax && bytes < kilobyteMax:
      return (bytes / byteMax).toFixed(1) + 'KB';
    default:
    // bytes >= kilobyteMax
      return (bytes / kilobyteMax).toFixed(1) + 'MB';
  }
}

export function validateFileType(file: File): boolean {
  return fileTypes.includes(file.type);
}

export function findFileSizeAlertMessageType(fileSize: number): MESSAGE_TYPE {
  if (fileSize >= MAX_FILE_SIZE) return MESSAGE_TYPE.DANGER;
  if (fileSize >= NEAR_MAX_FILE_SIZE) return MESSAGE_TYPE.WARNING;
  return MESSAGE_TYPE.SUCCESS;
}

export function totalFileSize(data: IDataImage[]): number {
  return !!data.length && data.map((obj) => obj.fileSize).reduce((accumulator, currentValue) => accumulator + currentValue) || 0;
}
