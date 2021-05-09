import React, { Suspense, lazy } from "react";
// import FormUpload from "./FormUpload";
const FormUpload = lazy(() => import("./FormUpload.js"));
import FormSelect from "./FormSelect";
// const FormSelect = lazy(() => import("./FormSelect.js"));
import FormOptions from "./FormOptions";
// const FormOptions = lazy(() => import("./FormOptions.js"));

import FormResults from "./FormResults";
// const FormResults = lazy(() => import("./FormResults"));

// Modules
// Dynamic imports
// import { saveAs } from "file-saver";
// import JSZip from "jszip";
async function saveAndDownloadFiles(selectedFileExtension, processImages, Selectedwebcomics, webcomicIndex) {
    const JSZip = await import(/* webpackPrefetch: true */ "jszip");
    const fileSaver = await import(/* webpackPrefetch: true */ "file-saver");

    const JSZipConstructor = JSZip.default;
    const saveAs = fileSaver.default;

    const zip = new JSZipConstructor();
    const selectedFileExt = selectedFileExtension;

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

            saveAs(blob, `${Selectedwebcomics[webcomicIndex]}.zip`);
        })
}

// libs
import createId from "../libs/createId";


// TODO: FEATURE (NEXT UPDATE)
// "Rotate" button in Preview thumb
// Also see in 'FormUpload.js'

const alertMessages = {
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

// Accepted file types
const fileTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
];

function validFileType(file) {
    return fileTypes.includes(file);
}

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // # STYLES EVENT
            // EVENT: onDragOver
            isDragOver: false,
            dropzoneBordersClass: {
                highlight: "dropzone dropzone--over",
                default: "dropzone"
            },
            inputDataAvailable: false,
            // EVENT: onClick
            // "Begin Slice!" button
            sliceText: "slice-btn",
            // EVENT: conditional
            // div class "preview-wrapper"
            previewWrapperClass: {
                visible: "preview-wrapper",
                invisible: "preview-wrapper hidden"
            },
            // # ALERT MESSAGES AND STATE
            // Success
            isAlertMessageSuccess: false,
            alertMessageSuccess: "",
            // Error
            isAlertMessageError: false,
            alertMessageError: "",
            // Warning
            isAlertMessageWarning: false,
            alertMessageWarning: "",
            // Error on "Begin Slice!"
            isAlertMessageErrorOnBeginSliceBtn: false,
            alertMessageErrorOnBeginSliceBtn: "",
            // Success on "Begin Slice!"
            isAlertMessageSuccessOnBeginSliceBtn: false,
            alertMessageSuccessOnBeginSliceBtn: "",
            // Error on none webcomic platform selected
            isAlertMessageErrorOnSelectForm: false,
            alertMessageErrorOnSelectForm: "",

            // # DATA
            processedFileData: [],
            inputField: [],
            // inputField: [
            //     {
            //         fileRead: [<obj>],
            //         id: <number>
            //         fileSize: <number>
            //     }
            // ]
            totalFileSize: 0, // Byte measurement
            selectedWebcomics: [],
            selectedFileExtension: "jpeg", // default value
            selectedSquashLevel: "none"
        };

        // # METHODS
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFileDrop = this.handleFileDrop.bind(this);
        this.processResults = this.processResults.bind(this);
        this.handleBeginSlicBtn = this.handleBeginSlicBtn.bind(this);
        // TOGGLE CLASS
        this.toggleBeginSliceText = this.toggleBeginSliceText.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        // DATA MANAGEMENT
        // DELETE Data
        this.handleRemoveSelf = this.handleRemoveSelf.bind(this);
        this.handleClickToRemoveAll = this.handleClickToRemoveAll.bind(this);
        // SET file data
        this.setFilesData = this.setFilesData.bind(this);
        // GET total file size
        this.checkTotalFileSize = this.checkTotalFileSize.bind(this);
        // UPLOAD on file browse
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectedWebcomic = this.handleSelectedWebcomic.bind(this);
        this.handleOptionsFileExtenions = this.handleOptionsFileExtenions.bind(this);
        this.handleOptionsSquashLevel = this.handleOptionsSquashLevel.bind(this);
    }


    // ===============
    // # REACT METHODS
    // ===============
    // componentWillUnmount() {
    //     console.log("UNMOUNTING...");
    // }

    // componentDidMount() {
    //     console.log("MOUNTING...");
    // }

    // componentDidUpdate() {
    //     console.log("COMPONENT UPDATING...");
    // }


    // ========
    // # EVENTS
    // ========

    // event: drag
    handleDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            isDragOver: true
        })
    }

    // event: drag
    handleDragLeave(e) {
        e.preventDefault(e);
        e.stopPropagation();

        this.setState({
            isDragOver: false
        })
    }

    // event: drag
    // Reorder files
    handleDragEnd(result) {
        // CREATE shallow copy
        const items = Array.from(this.state.inputField);

        // EXTRACT targeted item
        const [reorderedItem] = items.splice(result.source.index, 1);

        // PUSH targeted item into new order
        items.splice(result.destination.index, 0, reorderedItem);

        this.setState({
            inputField: items
        })
    }

    // event: click
    // Open browser for files
    handleClickToUpload() {
        const dropzoneInput = document.querySelector(".dropzone__input");

        // EMULATE HTML input CLICK event
        dropzoneInput.click();
    }

    // event: click
    // UPDATE state 'selectedFileExtension'
    handleOptionsFileExtenions(e) {
        const newSelectedFileExtension = e.target.value;

        this.setState({
            selectedFileExtension: newSelectedFileExtension
        });
    }

    // event: click
    // UPDATE state 'selectedSquashLevel'
    handleOptionsSquashLevel(e) {
        const newSelectedSquashLevel = parseInt(e.target.value, 10);

        if (newSelectedSquashLevel == 0) {
            this.setState({
                selectedSquashLevel: "none"
            });
        } else {
            this.setState({
                selectedSquashLevel: newSelectedSquashLevel
            });
        }
    }

    // event: click
    // "Begin Slice!" button
    handleBeginSlicBtn(e) {
        e.preventDefault();

        if (this.state.inputField.length === 0) {
            // ALERT MESSAGE
            // No data (or image file) found
            this.setState({
                isAlertMessageErrorOnBeginSliceBtn: true,
                alertMessageErrorOnBeginSliceBtn: alertMessages.onError.noFilesFound
            })

            setTimeout(() => {
                this.setState({
                    isAlertMessageErrorOnBeginSliceBtn: false,
                    alertMessageErrorOnBeginSliceBtn: "",
                });
            }, 8000);
        } else {
            if (this.state.selectedWebcomics.length === 0) {
                // ALERT MESSAGE (PERSIST)
                // No webcomic platform selected
                this.setState({
                    isAlertMessageErrorOnBeginSliceBtn: true,
                    alertMessageErrorOnBeginSliceBtn: alertMessages.onError.selectFormMandatory,
                    isAlertMessageErrorOnSelectForm: true,
                    alertMessageErrorOnSelectForm: alertMessages.onError.selectFormMandatoryTarget
                })
            } else {
                // ALERT MESSAGE (PERSIST -> REMOVED)
                this.setState({
                    isAlertMessageErrorOnBeginSliceBtn: false,
                    alertMessageErrorOnBeginSliceBtn: "",
                    isAlertMessageErrorOnSelectForm: false,
                    alertMessageErrorOnSelectForm: "",
                });

                this.processResults();

                // ANIMATION
                this.toggleBeginSliceText();

                setTimeout(() => {
                    this.toggleBeginSliceText();
                }, 1500);
            }
        }
    }

    // event: click
    // "X" button
    // REMOVE current thumb UI
    // REMOVE current thumb data
    handleRemoveSelf(e) {
        e.preventDefault();

        // GRAB all list
        const sourceThumbnails = document.querySelectorAll(".preview__thumbnail-container");

        // TRANSFORM node into JavaScript objects (array)
        const arrThumbnails = Array.from(sourceThumbnails);

        // CREATE shallow copy
        const items = Array.from(this.state.inputField);

        // GET index of targeted item
        const removeItemIndex = arrThumbnails.indexOf(e.target.parentElement);

        // UPDATE state totalFileSize
        this.setState((currentState) => {

            // GET data
            const sourceInputField = Array.from(currentState.inputField);

            // GET data 'fileSize'
            const fileSizesArr = sourceInputField.map((file) => {
                return file.fileSize;
            });

            // SUM all data 'fileSize'
            const totalFileByte = fileSizesArr.reduce((accumulator, currentValue) => accumulator + currentValue);

            // EXTRACT targeted item 'fileSize'
            const removedItemFileSize = sourceInputField[removeItemIndex]["fileSize"];

            // SUBTRACT 'totalFileSize' - targeted item 'fileSize'
            const newTotalFileSize = totalFileByte - removedItemFileSize;

            return ({
                totalFileSize: newTotalFileSize
            })

            // UPDATE UI
        }, this.checkTotalFileSize());

        // REMOVE targeted item
        items.splice(removeItemIndex, 1);


        // UPDATE data
        this.setState({
            inputField: items
        })
    }


    // event: click
    // EMPTY state "inputField"
    // "Clear Files" button
    handleClickToRemoveAll() {
        // ALERT MESSAGE
        // UPDATE data
        this.setState({
            inputField: [],
            inputDataAvailable: false,
            isAlertMessageSuccess: true,
            alertMessageSuccess: alertMessages.onSuccess.filesRemoved
        });

        setTimeout(() => {
            this.setState({
                isAlertMessageSuccess: false,
                alertMessageSuccess: ""
            });
        }, 8000);
    }

    // event: change
    // LIStEN to user on CLICK to upload file
    // if user selects file(s), proceed to process image files methods
    handleInputChange(e) {
        const files = e.target.files;
        this.setFilesData(files);

        // UPDATE UI on CONDITION
        if (this.state.inputField) {
            this.setState({
                inputDataAvailable: true
            })
        }
    }

    // event: click
    // UPDATE state 'selectedWebcomics'
    handleSelectedWebcomic(e) {
        const selectedWebcomicValue = e.target.value;

        const currentSelectedWebcomics = this.state.selectedWebcomics;

        if (currentSelectedWebcomics.includes(selectedWebcomicValue)) {
            // UNCHECK
            const removeItemIndex = currentSelectedWebcomics.indexOf(selectedWebcomicValue);
            currentSelectedWebcomics.splice(removeItemIndex, 1);

            this.setState({
                selectedWebcomics: currentSelectedWebcomics
            });
        } else {
            // CHECK
            this.setState((currentState) => ({
                selectedWebcomics: [...currentState.selectedWebcomics, selectedWebcomicValue]

            }));
        }
    }


    // =========
    // # METHODS
    // =========

    // TOGGLE
    // "Begin Slice" Text
    toggleBeginSliceText() {
        if (this.state.sliceText === "slice-btn") {

            this.setState({
                sliceText: "icon-spinner8 animate-spin"
            })
        } else if (this.state.sliceText === "icon-spinner8 animate-spin") {

            this.setState({
                sliceText: "slice-btn"
            })
        }
    }

    // FETCHING FILE READ
    // - VALIDATE file on upload
    // - UPDATE state "inputField"
    // - TOGGLE class
    handleFileDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        this.setFilesData(files);

        // UPDATE data boolean (for other chain reactions)
        if (this.state.inputField) {
            this.setState({
                inputDataAvailable: true
            })
        }

        this.setState({
            isDragOver: false
        });
    }

    setFilesData(files) {
        Object.values(files).forEach((obj) => {

            // VALIDATE
            if (!validFileType(obj.type)) {

                // ALERT MESSAGE
                // User attempted to upload unacceptable files
                this.setState({
                    alertMessageError: alertMessages.onError.unacceptableFileType,
                    isAlertMessageError: true
                })

                setTimeout(() => {
                    this.setState({
                        alertMessageError: "",
                        isAlertMessageError: false
                    })
                }, 8000);
            } else {

                // CREATE image file data preview container
                this.setState((currentState) => ({
                    inputField: [
                        ...currentState.inputField,
                        {
                            fileRead: obj,
                            id: createId(),
                            fileSize: obj.size
                        }
                    ]
                }))

                // UPDATE state 'totalFileSize'
                this.setState((currentState) => {

                    // GET main data
                    const sourceInputField = currentState.inputField;

                    // GET main data 'fileSize'
                    const fileSizesArr = sourceInputField.map((file) => {
                        return file.fileSize;
                    });

                    // TOTAL main data 'fileSize'
                    const totalFileByte = fileSizesArr.reduce((accumulator, currentValue) => accumulator + currentValue);

                    return ({
                        totalFileSize: totalFileByte
                    })

                    // CHECK CONDITION
                }, this.checkTotalFileSize());
            }
        })
    }

    // CHECK CONDITION
    // UPDATE UI if CONDITION are met
    checkTotalFileSize() {

        // ALERT MESSAGE
        // CONDITION
        // near max, pass 18MB
        if (this.state.totalFileSize >= 18874368) {
            this.setState({
                isAlertMessageWarning: true,
                alertMessageWarning: alertMessages.onWarning.nearMaxFileSize
            })
        }

        // ALERT MESSAGE
        // CONDITION
        // over max, pass 20MB
        if (this.state.totalFileSize >= 20971520) {
            this.setState({
                isAlertMessageError: true,
                alertMessageError: alertMessages.onError.overMaxFileSize
            })
        }
    }

    // PROCESS IMAGE FILES
    processResults() {
        // GET all image file elements
        const sourceImagesRaw = document.querySelectorAll(".preview__thumbnail img");
        // REFERENCE the canvas
        const canvas = document.querySelector("#canvas");
        const context = canvas.getContext("2d");

        // TRANSFORM node into JavaScript objects (array)
        const sourceImages = Array.from(sourceImagesRaw);

        // GET user selected webcomic platform(s) from SELECT form component
        const Selectedwebcomics = this.state.selectedWebcomics;

        // # (1) SELECT form
        // PROCESS files for all selected webcomic platform applied
        for (let i = 0; i < Selectedwebcomics.length; i++) {

            let processImages = [];

            // PROCESS image file
            sourceImages.forEach((img) => {
                const imgWidth = img.naturalWidth;
                const imgHeight = img.naturalHeight;

                // * CONDITION: image width > image height
                // ROTATE image
                if (imgWidth > imgHeight) {
                    // NOTE:
                    // Bottom surface would be pointed left, and
                    // Top surface would be pointed right

                    canvas.width = imgHeight;
                    canvas.height = imgWidth;
                    context.rotate(Math.PI / 2);

                    context.drawImage(
                        img, 0, -(imgHeight)
                    );
                }

                const maxHeight = imgHeight;
                const width = imgWidth;

                let scaleWidth;

                // # (2) OPTIONS form - "SQUASH"
                switch (this.state.selectedSquashLevel) {
                    case "none":
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
                }

                let webcomicMaxWidth;
                let webcomicMaxHeight;

                // TODO: FEATURE (NEXT UPDATE)
                // Find out normal tapas ratio
                // Current Webcomic Platform Available...
                // ! tapas in the works... (WIP)
                switch (Selectedwebcomics[i]) {
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

                // based on aspect ratio, what the height should be...
                const determinedeHeight = width / aspectRatio;

                let scaleDeterminedeHeight = determinedeHeight;
                if (scaleWidth !== width) {
                    scaleDeterminedeHeight = scaleWidth / aspectRatio;
                }

                // * CONDITION:
                // If file image naturalHeight is shorter than determinedHeight,
                // return as is... unless Options scale applied
                if (determinedeHeight > maxHeight) {
                    const scaleMaxHeight = scaleWidth / (width / maxHeight);

                    canvas.width = scaleWidth;
                    canvas.height = scaleMaxHeight;

                    context.drawImage(
                        img, 0, 0, scaleWidth, scaleMaxHeight
                    );

                    const result = canvas.toDataURL();

                    processImages.push(result);
                } else {
                    let timesToSlice = Math.floor(maxHeight / determinedeHeight);
                    let currentSlice = 0;
                    let newYPosition = 0;
                    let slicedImages = [];

                    // * CONDITION: Longer length (height) images
                    while (timesToSlice > currentSlice) {
                        newYPosition = determinedeHeight * currentSlice;

                        canvas.width = scaleWidth;
                        canvas.height = scaleDeterminedeHeight;

                        context.drawImage(
                            img, 0, newYPosition, width, determinedeHeight, 0, 0, scaleWidth, scaleDeterminedeHeight
                        );

                        slicedImages.push(canvas.toDataURL());

                        currentSlice++;
                    }

                    // * CONDTION: Odd number remaining
                    // GET last coordinate
                    // GET remaining height
                    const remainCoordinateY = timesToSlice * determinedeHeight;
                    const remainHeight = maxHeight - remainCoordinateY;

                    // OPTIONS Squash - if available
                    let scaleRemaineHeight = remainHeight;
                    if (scaleWidth !== width) {
                        scaleRemaineHeight = scaleWidth / (width / remainHeight);
                    }

                    if (remainHeight !== 0) {
                        newYPosition = remainCoordinateY;

                        // ? Refactor to a function
                        canvas.width = scaleWidth;
                        canvas.height = scaleRemaineHeight;
                        context.drawImage(
                            img, 0, newYPosition, width, remainHeight, 0, 0, scaleWidth, scaleRemaineHeight
                        );

                        slicedImages.push(canvas.toDataURL());
                    }

                    processImages.push(...slicedImages);
                }

            });

            // CREATE Zip folder
            // NAME images with padded zero if under 10s
            // GET user file extension prefernce from Options form - File Extensions
            // PUSH images to Zip folder
            // DOWNLOAD to user's PC
            saveAndDownloadFiles(this.state.selectedFileExtension, processImages, Selectedwebcomics, i).then(() => {
                if (Selectedwebcomics.indexOf(Selectedwebcomics[i]) == Selectedwebcomics.indexOf(Selectedwebcomics[Selectedwebcomics.length - 1])) {
                    // ALERT MESSAGE
                    // Process completed
                    this.setState({
                        isAlertMessageSuccessOnBeginSliceBtn: true,
                        alertMessageSuccessOnBeginSliceBtn: alertMessages.onSuccess.completedProcess
                    });

                    setTimeout(() => {
                        this.setState({
                            isAlertMessageSuccessOnBeginSliceBtn: false,
                            alertMessageSuccessOnBeginSliceBtn: "",
                        });
                    }, 8000);
                }
            });


            // ADD image 'data:' url arr of processed image files
            // RESPONDS to display in Result form
            this.setState({
                processedFileData: processImages
            });
        }
    }

    render() {
        return (
            <main>
                <h2>Start Here</h2>

                <Suspense fallback={<div><p>LOADING...</p></div>}>
                    <FormUpload
                        // EVENTS
                        onHandleDrag={this.handleDrag}
                        onHandleDragLeave={this.handleDragLeave}
                        onHandleFileDrop={this.handleFileDrop}
                        onRemoveSelf={this.handleRemoveSelf}
                        onhandleDragEnd={this.handleDragEnd}
                        onHandleClickToUpload={this.handleClickToUpload}
                        onHandleInputChange={this.handleInputChange}
                        onHandleClickToRemoveAll={this.handleClickToRemoveAll}
                        // STYLED EVENTS
                        toggleDropzoneBordersClass={this.state.isDragOver ? this.state.dropzoneBordersClass.highlight : this.state.dropzoneBordersClass.default}
                        togglePreviewWrapperClass={this.state.inputDataAvailable ? this.state.previewWrapperClass.visible : this.state.previewWrapperClass.invisible}
                        // ALERT MESSAGES
                        getAlertErrorText={this.state.alertMessageError}
                        isAlertMessageError={this.state.isAlertMessageError}
                        getAlertSuccessText={this.state.alertMessageSuccess}
                        isAlertMessageSuccess={this.state.isAlertMessageSuccess}
                        isAlertMessageWarning={this.state.isAlertMessageWarning}
                        getAlertWarningText={this.state.alertMessageWarning}
                        // DATAS
                        inputField={this.state.inputField}
                        getTotalFileSize={this.state.totalFileSize}
                    />
                </Suspense>


                {/* <Suspense fallback={<div><p>LOADING...</p></div>}> */}
                    <FormSelect
                        onHandleSelectedWebcomic={this.handleSelectedWebcomic}
                        isAlertMessageSelectFormError={this.state.isAlertMessageErrorOnSelectForm}
                        getAlertMessageSelectFormText={this.state.alertMessageErrorOnSelectForm}
                    />
                {/* </Suspense> */}


                {/* <Suspense fallback={<div><p>LOADING...</p></div>}> */}
                    <FormOptions
                        onHandleOptionsFileExtenions={this.handleOptionsFileExtenions}
                        onHandleOptionsSquashLevel={this.handleOptionsSquashLevel}
                    />
                {/* </Suspense> */}

                <div className="slice-btn-container">
                    <a
                        className="slice-btn"
                        onClick={this.handleBeginSlicBtn}>
                        <h3>
                            {this.state.sliceText === "slice-btn"
                                ? "Begin Slice!"
                                : <i className="icon-spinner8 animate-spin"></i>}
                        </h3>
                    </a>
                </div>
                {/* CONDITION */}
                {this.state.isAlertMessageErrorOnBeginSliceBtn === true
                    ? <div className="alert-message--error">
                        <i className="alert-icon alert-icon--error icon-warning"></i>
                        <span className="alert-message-text--error">
                            {this.state.alertMessageErrorOnBeginSliceBtn}
                        </span>
                    </div>
                    : null}
                {/* CONDITION */}
                {this.state.isAlertMessageSuccessOnBeginSliceBtn === true
                    ? <div className="alert-message--success">
                        <i className="alert-icon alert-icon--success icon-check"></i>
                        <span className="alert-message-text--success">
                            {this.state.alertMessageSuccessOnBeginSliceBtn}
                        </span>
                    </div>
                    : null}
                {/* <Suspense fallback={<div><p>LOADING...</p></div>}> */}
                    <FormResults
                        getImageData={this.state.processedFileData}
                    />
                {/* </Suspense> */}
            </main>
        )
    }
}