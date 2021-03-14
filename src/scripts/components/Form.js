import React from 'react';
import FormUpload from './FormUpload';
import FormSelect from './FormSelect';
import FormOptions from './FormOptions';
import FormResults from './FormResults';

// libs
import createId from '../libs/createId';
import convertBytes from '../libs/convertBytes';

// TODO
// 1. Listen for drag and drop
// 2. Detect when a file is dropped on the drop zone
// 3. Display image name and file type
// 4. Validate dropped images
// 5. Delete images with unsupported file types
// 6. Preview images withvalid file types
// 7. Upload images

// Collect data on User options
// - [ ] webcomic platform
// - [ ] alert message when none selected
// persist until next click
// - [ ] at "Begin Slice!"
// - [ ] at Select Form
// - [ ] file type
// - [ ] Squash level



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

const webcomicsModel = [
    {
        htmlLabel: "webtoon",
        imageSource: "images/webtoon-icon.svg",
        htmlAlt: "webtoon icon",
        text: "Webtoon",
        disabled: false
    },
    {
        htmlLabel: "tapas",
        imageSource: "images/tapas-icon.png",
        htmlAlt: "tapas icon",
        text: "Tapas",
        disabled: false
    },
];

const filExtensionsModel = [
    {
        htmlLabel: "jpeg",
        text: "JPEG"
    },
    {
        htmlLabel: "png",
        text: "PNG"
    }
];

// Accepted file types
const fileTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
];

function validFileType(file) {
    return fileTypes.includes(file);
}



// TODO
// - Store as one object
// - Add 'reader' from upload
// - Add 'File' / 'FileList' from upload
// - Add Dragging and re-ordering event
// - update data too!
// -
// - [x] validata file
// If unacceptable, add error message, otherwise green light
// - Something to do with fixing border drag on event styles ???
// - [ ] roate image function >> on condition
// - [ ] scale image function >> options
// - [x] re-order >> on rearranging
// - [ ] Implement Click to browser for upload

// let fileBlobs = [];

// * NB: React doesn't support nested state.
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
            // ALERT MESSAGES AND STATE
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
            inputFileData: [],
            inputField: [],
            // inputField: [
            //     {
            //         fileRead: [],
            //         id: <number>
            //         fileSize: <number>
            //     }
            // ]
            totalFileSize: 0,
            selectedWebcomics: [],
            selectedFileExtension: "jpeg", // default value
            selectedSquashLevel: ""
        };

        // METHODS
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

        // ! WIP
        this.handleSelectedWebcomic = this.handleSelectedWebcomic.bind(this);
        this.handleOptionsFileExtenions = this.handleOptionsFileExtenions.bind(this);

        // ? I don't know if use this blub
        this.getFileBlob = this.getFileBlob.bind(this);
    }


    // ===============
    // # REACT METHODS
    // ===============
    componentWillUnmount() {
        console.log("UNMOUNTING...");
    }

    componentDidMount() {
        console.log("MOUNTING...");
    }

    componentDidUpdate() {
        console.log("COMPONENT UPDATING...");
    }


    // ==============
    // # STYLE EVENTS
    // ==============
    // TOGGLE "Begin Slice" Text
    toggleBeginSliceText() {
        console.log("TOGGLE 'BEGIN SLICE' TEXT...")

        if (this.state.sliceText === "slice-btn") {
            console.log("Toggle: spinner")

            this.setState({
                sliceText: "fa fa-refresh fa-spin fa-3x fa-fw"
            })
        } else if (this.state.sliceText === "fa fa-refresh fa-spin fa-3x fa-fw") {
            console.log("Toggle: text")

            this.setState({
                sliceText: "slice-btn"
            })
        }
    }


    // ========
    // # EVENTS
    // ========

    handleDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            isDragOver: true
        })
    }

    handleDragLeave(e) {
        e.preventDefault(e);
        e.stopPropagation();

        this.setState({
            isDragOver: false
        })
    }


    // =========
    // # METHODS
    // =========

    // FETCHING FILE READ
    // - VALIDATE
    // - setState to "inputField"
    // - TOGGLE class
    handleFileDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        this.setFilesData(files);

        // ! LOG
        // console.log("HANDLE FILE DROP: ", files);

        // Set to true when file input is available
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
            // ! LOG
            // console.log("HANDLE FILE DROP - OBJ: ", obj);
            // console.log("HANDLE FILE DROP - OBJ-TYPE: ", obj.type);

            // VALIDATE
            if (!validFileType(obj.type)) {
                // Display Alert Message on Error w/ setTimeout
                // - SET Alert Message
                // - SET Class
                // - ADD setTimeout

                // ! LOG
                // console.log("Invalid file!");

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

                return false;
            } else {
                // ! LOG
                // console.log("Valid file!");

                // ! LOG
                // console.log("ACCEPTED", obj.type, obj);
                // console.log("ACCEPTED ", obj);
                // console.log("ACCEPTED ", obj.size);

                this.setState((currentState) => ({
                    inputField: [
                        ...currentState.inputField,
                        {
                            fileRead: obj,
                            id: createId(),
                            fileSize: obj.size
                        }
                    ]
                }), () => console.log("HANDLE FILE DROP LOG UPDATE: ", this.state.inputField))

                // Display total file size
                this.setState((currentState) => {
                    // GET all file size
                    // SUM it all up
                    // DISPLAY on UI

                    const sourceInputField = currentState.inputField;

                    // ! LOG
                    // console.log("TOTALING...", sourceInputField);

                    const fileSizesArr = sourceInputField.map((file) => {
                        return file.fileSize;
                    });

                    const totalFileByte = fileSizesArr.reduce((accumulator, currentValue) => accumulator + currentValue);

                    // ! LOG
                    // console.log("TOTAL FILE - BYTE:", totalFileByte);
                    // console.log("TOTAL FILE - CONVERSION:", convertBytes(totalFileByte));

                    return ({
                        totalFileSize: totalFileByte
                    })
                }, this.checkTotalFileSize());
            }
        })
    }

    checkTotalFileSize() {
        // ! LOG
        // console.log("CHECKING TOTAL FILE SIZE...", this.state.totalFileSize);

        // CONDITION
        // near max
        // pass 18MB
        if (this.state.totalFileSize >= 18874368) {
            this.setState({
                isAlertMessageWarning: true,
                alertMessageWarning: alertMessages.onWarning.nearMaxFileSize
            })
        }

        // CONDITION
        // over max
        // pass 20MB
        if (this.state.totalFileSize >= 20971520) {
            this.setState({
                isAlertMessageError: true,
                alertMessageError: alertMessages.onError.overMaxFileSize
            })
        }
    }

    // FETCHING FILE BLOB
    getFileBlob(blob) {
        // ! LOG
        console.log("RECEIVING :", blob);
        // console.log("BLOB ARR :", fileBlobs);

        this.setState((currentState) => ({
            inputFileData: [...currentState.inputFileData, blob]
        }), () => {
            console.log("LOG UPDATE STATE 'fileData'", this.state.inputFileData);
        });
    }

    // PROCESS FILES
    // ! WIP - Testing
    // ? name change - displayResults() ?
    processResults() {
        // 1. Get file(s)
        // 2. Access files in Preview
        // 3. Loop through
        // ...
        // CONDTION: IF width is greater than height, ROTATE
        // a. Check if user would like to squash images
        // YES - Check how may pixels to, then proceed scaling
        // NO - Skip to next step
        // b.  (CONDITION) Check Image length and fit to ratio, DIVIDE-CROP
        // This will determine how many times you use the same iamge
        // Webtoon maximum file size is 800x1280 px
        // 1. Use modulo divide math operation to find coordinates for each page
        // Remainin will becutas is
        // 2. Use ratio for width and height for output,
        // and push to array for save files and zip output
        // 3. (CONDITION) The remanings will account for
        // canvas should be reiterated
        // Get last coordinate
        // total height minus height length used
        // widht is as is
        // push to array
        // Automatically download image after set up
        // Use `ctx.translate()` for repositioning

        // Get Image Element
        const sourceImagesRaw = document.querySelectorAll(".preview__thumbnail img");
        const canvas = document.querySelector("#canvas");
        // ? rename to 'ctx'
        const context = canvas.getContext("2d");

        const sourceImages = Array.from(sourceImagesRaw);

        // ! LOG
        // console.log("IMAGES AVAILABLE RAW: ", sourceImagesRaw);
        console.log("PROCESS - IMAGES AVAILABLE ARR: ", sourceImages);
        // console.log("IMAGES AVAILABLE ARR [0]: ", sourceImages[0]);

        // ! WIP
        // !! Process from here for webcomic platform selected
        // Process
        const Selectedwebcomics = this.state.selectedWebcomics;

        // ! LOG
        console.log("PROCESS - SELECTED WEBCOMICS DATA", Selectedwebcomics)

        if (Selectedwebcomics.length == 0) {
            // TODO
            // write fix warning on where to address the issue
            // when addressed, warnings may disappear

            console.log("PROCESS - No selected webcomic platforms found...", Selectedwebcomics);
            // "Select a webcomic platform to base slicing process."

        } else {

            for (let i = 0; i < Selectedwebcomics.length; i++) {
                let processImages = [];

                console.log("PROCESS - FOR LOOPING: ", Selectedwebcomics[i]);
                // Process for each webcomic platform

                // Check if there is selected webcomic before processing
                // CONDITION Write warning if selectedWebcomics is empty
                // ! LOG
                console.log("PROCESSING: ", Selectedwebcomics[i]);
                // TODO
                // TRY...
                // ? Change to for-loop
                sourceImages.forEach((img) => {
                    const imgWidth = img.naturalWidth;
                    const imgHeight = img.naturalHeight;

                    // * CONDITION
                    // ! IF width > height, ROTATE
                    // 2. Check ratio
                    // 3. Divide (slice)
                    if (imgWidth > imgHeight) {
                        // ! LOG
                        console.log("CONDITION PASS: WIDTH > HEIGHT")
                        // Rotate
                        // Bottom surface would be pointed left, and
                        // Top surface would be pointed right

                        canvas.width = imgHeight;
                        canvas.height = imgWidth;
                        context.rotate(Math.PI / 2);
                        context.drawImage(
                            img, 0, -(imgHeight)
                        );
                    }

                    // "SLICE" PROCESS
                    // (CONDITION) IF image file is long enough or as scale, proceed
                    // OTHERWISE, return file as is.

                    // Images are cropped, and
                    // pushed into "pages" array
                    // ? RETURN destructured array
                    // ? Consider naming pattern
                    // 01, 02, 03, ..., etc.
                    const maxHeight = imgHeight;
                    const width = imgWidth;

                    // ! LOG
                    console.log("PROCESS - ORIGINAL WIDTH: ", Selectedwebcomics[i], width);

                    // * CONDITION
                    //
                    // ! WIP >>
                    // !!
                    // - Selected File Types
                    // - Selected Squash Level

                    let webcomicMaxWidth;
                    let webcomicMaxHeight;

                    // webcomicMaxWidth = 800;
                    // webcomicMaxHeight = 1280;

                    // Current Webcomic Platform Available...
                    // ! tapas in the works...
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

                    // ! <<

                    // ! LOG
                    console.log("PROCESS - ASPECT RATIO: ", Selectedwebcomics[i], aspectRatio);
                    console.log("PROCESS - MAX WIDTH: ", Selectedwebcomics[i], webcomicMaxWidth);
                    console.log("PROCESS - MAX HEIGHT: ", Selectedwebcomics[i], webcomicMaxHeight);

                    // based on aspect ratio, what the height should be...
                    const determinedeHeight = width / aspectRatio;

                    // ! LOG
                    console.log("PROCESS - determinedeHeight: ", Selectedwebcomics[i], determinedeHeight);

                    // CONDITION:
                    // If file image naturalHeight is shorter than determinedHeight,
                    // return as is
                    if (determinedeHeight > maxHeight) {
                        // ! LOG
                        console.log("PROCESS - HEIGHT TOO SHORT: ", Selectedwebcomics[i]);

                        canvas.width = imgWidth;
                        canvas.height = imgHeight;
                        context.drawImage(
                            img, 0, 0, imgWidth, imgHeight
                        );

                        const result = canvas.toDataURL();

                        processImages.push(result);
                    } else {

                        // ! LOG
                        // console.log("DETERMINED HEIGHT: ", determinedeHeight);

                        let timesToSlice = Math.floor(maxHeight / determinedeHeight);

                        // ! LOG
                        // console.log("SLICE X: ", timesToSlice);

                        let currentSlice = 0;
                        let newYPosition = 0;
                        // let newYPosition = determinedeHeight * currentSlice;

                        // ! LOG
                        // console.log("NEW Y POS: ", newYPosition);

                        // ! WIP
                        // - Test with longer images

                        let slicedImages = [];

                        // * CONDITION: Longer length images
                        while (timesToSlice > currentSlice) {

                            newYPosition = determinedeHeight * currentSlice;
                            // CROP HERE
                            // ? Refactor to a function
                            canvas.width = width;
                            canvas.height = determinedeHeight;
                            context.drawImage(
                                img, 0, newYPosition, width, determinedeHeight, 0, 0, width, determinedeHeight
                            );

                            // !LOG
                            // console.log("RESULT ", currentSlice, " ", result);

                            slicedImages.push(canvas.toDataURL());

                            currentSlice++;
                        }


                        // * CONDTION: Odd number
                        // Get last coordinate
                        const remainCoordinateY = timesToSlice * determinedeHeight;
                        const remainHeight = maxHeight - remainCoordinateY;

                        // ! LOG
                        // console.log(remainHeight);
                        // ! <<

                        if (remainHeight !== 0) {
                            console.log("REMAINING PIECES...");

                            newYPosition = remainCoordinateY;
                            // CROP HERE
                            // ? Refactor to a function
                            canvas.width = width;
                            canvas.height = remainHeight;
                            context.drawImage(
                                img, 0, newYPosition, width, remainHeight, 0, 0, width, remainHeight
                            );


                            slicedImages.push(canvas.toDataURL());
                        }


                        // ! LOG
                        console.log("PROCESS - SLICED IMAGES", slicedImages);

                        processImages.push(...slicedImages);
                    }

                });

                // ! LOG
                // return data URL
                // TODO
                // - rename with 00 padding
                // - user option preference
                console.log("NEW IMAGES: ", processImages);

                const zip = new JSZip();
                const selectedFileExt = this.state.selectedFileExtension;

                // ! LOG
                console.log("NEW FILE EXT: ", selectedFileExt);

                for (let i = 0; i < processImages.length; i++) {
                    zip.file(`PG_${i}.${selectedFileExt}`, processImages[i].substr(processImages[i].indexOf(',') + 1), { base64: true });
                }

                zip.generateAsync({ type: "blob", mimeType: "image/jpeg" })
                    .then(function (blob) {

                        // ! LOG
                        console.log("BLOB #2", blob);

                        saveAs(blob, "example.zip");
                    })

                // ? Synchronize zip?

                // ! LOG
                // console.log("PROCESS - processImages ARR: ", processImages)
            }

        }


        // TODO
        // Write condition when notiching is selected...
        // write err
        this.setState({
            isAlertMessageSuccessOnBeginSliceBtn: true,
            alertMessageSuccessOnBeginSliceBtn: alertMessages.onSuccess.completedProcess
        });

        setTimeout(() => {
            this.setState({
                isAlertMessageSuccessOnBeginSliceBtn: false,
                alertMessageSuccessOnBeginSliceBtn: "",
            });
        }, 3000);
    }

    // "Begin Slice!" button
    handleBeginSlicBtn(e) {
        e.preventDefault();
        console.log("BEGIN SLICE FILE: ", this.state.inputField);

        if (this.state.inputField.length === 0) {
            console.log("BEGIN SLICE - NO DATA FOUND");

            // Display Alert Message
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

                // ! LOG
                console.log("PASS - REJECTED: NO WEBCOMIC PLAT SELECTED");
                // Display Alert Message
                // Persist
                this.setState({
                    isAlertMessageErrorOnBeginSliceBtn: true,
                    alertMessageErrorOnBeginSliceBtn: alertMessages.onError.selectFormMandatory,
                    isAlertMessageErrorOnSelectForm: true,
                    alertMessageErrorOnSelectForm: alertMessages.onError.selectFormMandatoryTarget
                })
            } else {
                // ! LOG
                console.log("PASS - WEBCOMIC PLAT SELECTED");

                // Remove any error message
                this.setState({
                    isAlertMessageErrorOnBeginSliceBtn: false,
                    alertMessageErrorOnBeginSliceBtn: "",
                    isAlertMessageErrorOnSelectForm: false,
                    alertMessageErrorOnSelectForm: "",
                });

                //! LOG
                console.log("Processing results...");
                this.processResults();

                console.log("Handle Begin Slice Button")
                this.toggleBeginSliceText();

                setTimeout(() => {
                    this.toggleBeginSliceText();
                }, 1500);
            }
        }
    }

    // REORDER FILES
    // event: drag
    handleDragEnd(result) {
        // ! LOG
        // console.log("DnD HANDLE EVENT", result);

        // Create shallow copy
        const items = Array.from(this.state.inputField);
        // const items = this.state.inputField;

        // ! LOG
        // console.log("DnD HANDLE EVENT - ITEMS", items);

        // ! LOG
        // console.log("DnD HANDLE EVENT - ARR ITEMS", items);

        const [reorderedItem] = items.splice(result.source.index, 1);

        // ! LOG
        // console.log("DnD HANDLE EVENT - reorderedItem", reorderedItem);

        items.splice(result.destination.index, 0, reorderedItem);

        // ! LOG
        // console.log("DnD HANDLE EVENT - MODIFIED ITEMS", items);

        this.setState({
            inputField: items
        })
    }

    // ! WIP
    // "X" button
    handleRemoveSelf(e) {
        e.preventDefault();

        // ! LOG
        // console.log("HANDLE REMOVESELF: ", e);
        // console.log("HANDLE REMOVESELF - TARGET: ", e.target);
        // console.log("HANDLE REMOVESELF - PARENT: ", e.target.parentElement);
        // console.log("HANDLE REMOVESELF - PARENT PARENT: ", e.target.parentElement.parentElement);

        const sourceThumbnails = document.querySelectorAll(".preview__thumbnail-container");
        // const attribute = e.target.parentElement.attributes.getNamedItem("data-rbd-draggable-id").value;

        // ! LOG
        // console.log("HANDLE REMOVESELF - ALL CONTENTS: ", sourceThumbnails);

        const arrThumbnails = Array.from(sourceThumbnails);

        // ! LOG
        // console.log("HANDLE REMOVESELF - ALL CONTENTS ARR: ", arrThumbnails);

        // Create shallow copy
        const items = Array.from(this.state.inputField);

        const removeItemIndex = arrThumbnails.indexOf(e.target.parentElement);

        // ! WIP
        // UPDATE state totalFileSize
        // get target obj.size
        // total obj.size minus target obj.size
        this.setState((currentState) => {
            // ! LOG
            // console.log("RECALCULATING FILE SIZE...", )
            // Get all file sizes
            // sum it up
            // Display on UI
            const sourceInputField = Array.from(currentState.inputField);

            // ! LOG
            // console.log("RECALCULATING FILE: ", sourceInputField);

            const fileSizesArr = sourceInputField.map((file) => {
                // ! LOG
                // console.log("RECALCULATING FILE OBJ: ", file);
                return file.fileSize;
            });

            // ! WIP
            // TRY arr.reduce()
            const totalFileByte = fileSizesArr.reduce((accumulator, currentValue) => accumulator + currentValue);

            const removedItemFileSize = sourceInputField[removeItemIndex]["fileSize"];

            const newTotalFileSize = totalFileByte - removedItemFileSize;

            // ! LOG
            // console.log("TOTAL FILE - REMOVED:", removedItemFileSize);
            // console.log("TOTAL FILE - UPDATE:", removedItemFileSize);
            // console.log("TOTAL FILE - CONVERSION:", convertBytes(newTotalFileSize));

            return ({
                totalFileSize: newTotalFileSize
            })
        }, this.checkTotalFileSize());

        // ! LOG
        // console.log("HANDLE REMOVESELF - TARGET INDEX: ", removeItemIndex);

        items.splice(removeItemIndex, 1);

        // ! LOG
        console.log("HANDLE REMOVESELF - NEW ARR: ", items);

        this.setState({
            inputField: items
        }, () => console.log("HANDLE REMOVESELF - CURRENT STATE: ", this.state.inputField))

        console.log("HANDLE REMOVESELF - CURRENT STATE OUTSIDE: ", this.state.inputField)
    }

    // CLEAR DATA
    // Empty state "inputField"
    // "Clear Files" button
    handleClickToRemoveAll() {
        // ! LOG
        console.log("CLICKED - CLEAR FILES...")

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
        }, 3000);
    }

    handleClickToUpload() {
        //! LOG
        console.log("CLICKED - CLICK TO UPLOAD...")

        const dropzoneInput = document.querySelector(".dropzone__input");

        console.log("dropzoneInput", dropzoneInput);
        dropzoneInput.click();
    }

    handleInputChange(e) {
        // ! LOG
        console.log("INITIATE - INPUT CHANGE...")
        console.log(e);
        console.log(e.target.files);

        const files = e.target.files;
        this.setFilesData(files);

        // Set to true when file input is available
        if (this.state.inputField) {
            this.setState({
                inputDataAvailable: true
            })
        } else {
            console.log("Nothing in place")
        }
    }

    handleSelectedWebcomic(e) {
        // ! LOG
        // console.log("HANDLE WEBCOMIC - CLICK", e.target);
        // console.log("HANDLE WEBCOMIC - CLICK", e.target.value);

        const selectedWebcomicValue = e.target.value;

        // console.log("HANDLE WEBCOMIC - DATA", this.state.selectedWebcomics);
        const currentSelectedWebcomics = this.state.selectedWebcomics;

        if (currentSelectedWebcomics.includes(selectedWebcomicValue)) {
            // UNCHECK
            const removeItemIndex = currentSelectedWebcomics.indexOf(selectedWebcomicValue);
            currentSelectedWebcomics.splice(removeItemIndex, 1);

            // ? Refactor to simple setState for production
            this.setState({
                selectedWebcomics: currentSelectedWebcomics
            });
        } else {
            // CHECK
            this.setState((currentState) => ({
                selectedWebcomics: [...currentState.selectedWebcomics, selectedWebcomicValue]

            }), () => console.log("HANDLE WEBCOMIC - UPDATED DATA ", this.state.selectedWebcomics));
        }
    }

    handleOptionsFileExtenions(e) {
        // ! LOG
        console.log("HANDLE WEBCOMIC - CLICK", e.target);
        console.log("HANDLE WEBCOMIC - CLICK", e.target.value);

        const newSelectedFileExtension = e.target.value;

        this.setState({
            selectedFileExtension: newSelectedFileExtension
        });
    }

    render() {
        return (
            <main>
                <h2>Start Here</h2>
                <FormUpload
                    // EVENTS
                    onHandleDrag={this.handleDrag}
                    onHandleDragLeave={this.handleDragLeave}
                    onHandleFileDrop={this.handleFileDrop}
                    onRemoveSelf={this.handleRemoveSelf}
                    onhandleDragEnd={this.handleDragEnd}
                    // STYLE EVENTS
                    toggleDropzoneBordersClass={this.state.isDragOver ? this.state.dropzoneBordersClass.highlight : this.state.dropzoneBordersClass.default}
                    togglePreviewWrapperClass={this.state.inputDataAvailable ? this.state.previewWrapperClass.visible : this.state.previewWrapperClass.invisible}
                    // DATAS
                    inputField={this.state.inputField}
                    getTotalFileSize={this.state.totalFileSize}

                    // ? Not sure if in use...
                    getFileBlob={this.getFileBlob}

                    // ! WIP
                    onHandleClickToUpload={this.handleClickToUpload}
                    onHandleInputChange={this.handleInputChange}
                    onHandleClickToRemoveAll={this.handleClickToRemoveAll}
                    getAlertErrorText={this.state.alertMessageError}
                    isAlertMessageError={this.state.isAlertMessageError}
                    getAlertSuccessText={this.state.alertMessageSuccess}
                    isAlertMessageSuccess={this.state.isAlertMessageSuccess}
                    isAlertMessageWarning={this.state.isAlertMessageWarning}
                    getAlertWarningText={this.state.alertMessageWarning}
                />

                <FormSelect
                    getWebcomicsModel={webcomicsModel}
                    onHandleSelectedWebcomic={this.handleSelectedWebcomic}
                    isAlertMessageSelectFormError={this.state.isAlertMessageErrorOnSelectForm}
                    getAlertMessageSelectFormText={this.state.alertMessageErrorOnSelectForm}
                />
                <FormOptions
                    getFilExtensionsModel={filExtensionsModel}
                    onHandleOptionsFileExtenions={this.handleOptionsFileExtenions}
                />
                <div className="slice-btn-container">
                    <a
                        className="slice-btn"
                        onClick={this.handleBeginSlicBtn}>
                        <h3>
                            {this.state.sliceText === "slice-btn"
                                ? "Begin Slice!"
                                : <i className="fa fa-refresh fa-spin fa-fw"></i>}
                        </h3>
                    </a>
                </div>
                {/* CONDITION */}
                {this.state.isAlertMessageErrorOnBeginSliceBtn === true
                    ? <div className="alert-message--error">
                        <img className="alert-icon" src="images/error-icon.svg" alt="icon" />
                        <span className="alert-message-text--error">
                            {this.state.alertMessageErrorOnBeginSliceBtn}
                        </span>
                    </div>
                    : null}
                {/* CONDITION */}
                {this.state.isAlertMessageSuccessOnBeginSliceBtn === true
                    ? <div className="alert-message--success">
                        <img className="alert-icon" src="images/check-icon.svg" alt="icon" />
                        <span className="alert-message-text--success">
                            {this.state.alertMessageSuccessOnBeginSliceBtn}
                        </span>
                    </div>
                    : null}
                <FormResults
                    getAlertErrorText={this.state.alertMessageError}
                    isAlertMessageError={this.state.isAlertMessageError}
                />
            </main>
        )
    }
}