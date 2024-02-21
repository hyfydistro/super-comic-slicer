import IconWebtoon from "../../public/assets/images/icon-webtoon.svg";
import IconTapas from "../../public/assets/images/icon-tapas.png";

// Accepted file types
export const fileTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
];

export const MAX_FILE_SIZE = 20971520; // over max, pass 20MB

export const NEAR_MAX_FILE_SIZE = 18874368; // near max pass 18MB

export const alertMessages = {
  onSuccess: {
      filesRemoved: "Files were cleared.",
      completedProcess: "Process completed!"
  },
  onError: {
      unacceptableFileType: "File extensions not supported! Only PNG and JPEG (or JPG) allowed.",
      overMaxFileSize: "Total file size is over maximum. Remove some files to continue.",
      noFilesFound: "No images found to process. Upload some images to 'Begin Slice'!",
      selectFormMandatory: "Please check at least one webcomic platform under '2. Select'.",
      selectFormMandatoryTarget: "Check at least one in order to continue."

  },
  onWarning: {
      nearMaxFileSize: "Total file size is near maximum!",
  }
}

export const ALERT_MESSAGE_TIMER = 8000;

export const webcomicOptions = [
  {
    htmlLabel: "webtoon",
    imageSource: IconWebtoon,
    htmlAlt: "webtoon icon",
    name: "Webtoon",
    isDisabled: false
  },
  {
      htmlLabel: "tapas",
      htmlAlt: "tapas icon",
      imageSource: IconTapas,
      name: "Tapas",
      isDisabled: false
  }
];
