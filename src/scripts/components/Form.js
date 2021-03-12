import React from 'react';
import FormUpload from './FormUpload';
import FormSelect from './FormSelect';
import FormOptions from './FormOptions';
import FormResults from './FormResults';

// TODO
// 1. Listen for drag and drop
// 2. Detect when a file is dropped on the drop zone
// 3. Display image name and file type
// 4. Validate dropped images
// 5. Delete images with unsupported file types
// 6. Preview images withvalid file types
// 7. Upload images

// TODO
// - [ ] roate image function >> on condition
// i.e. displays WHOLLY (almost) - I don't want cramp
// horizontal images.
function Preview(props) {

    const files = props.inputFileRead;
    const id = [0, 1, 2, 3, 4, 5];

    // ! LOG
    console.log("INSIDE PREVIEW: ", files);

    if (files) {

        // ! log
        // console.log("PREVIEW LOG #1: ", files);
        // console.log("PREVIEW LOG #1: ", files["0"]);
        if (files.length >= 1) {
            console.log("PREVIEW LOG #2: ", files["0"]["name"]);
        }

        const previewThumbnailElements = files.map((file, i) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", getDataURL)

            function getDataURL() {
                console.log("MAKING DATA URL...", reader);

                const currentElement = document.querySelectorAll(".preview__thumbnail-container")[i].lastElementChild.firstElementChild;

                // ! Log
                console.log(currentElement);

                currentElement.src = reader.result;
            }

            // ! LOG
            // console.log("READER: ", reader);
            // console.log("SOURCE: ", dataURLs);
            // console.log("SOURCE: 0", dataURLs[0]);


            return (
                <div
                    key={id[i]}
                    className="preview__thumbnail-container"
                    data-label={JSON.stringify(file.name)}
                >
                    <button className="close-btn"></button>
                    <div className="preview__thumbnail">
                        <img alt="" />
                    </div>
                </div>
            )
        })


        return (
            <div className="preview-wrapper">
                <div className="preview-container">
                    <div className="preview">

                        {previewThumbnailElements}

                        {/* <div className="preview__thumbnail-container" data-label="myfile.txt">
                            <button className="close-btn"></button>
                            <div className="preview__thumbnail">
                                <img src="images/comic2.jpg" alt="" />
                            </div>
                        </div>

                        <div className="preview__thumbnail-container" data-label="myfile.txt">
                            <button className="close-btn"></button>
                            <div className="preview__thumbnail">
                                <img src="" alt="" />
                            </div>
                        </div> */}

                    </div>
                    <div className="preview__clear-btn-container">
                        <button className="preview__clear-btn">Clear Files</button>
                    </div>
                </div>
            </div>
        )
    }
}

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
// - [ ] re-order >> on rearranging

// let fileBlobs = [];

// * NB: React doesn't support nested state.
export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // # STYLES EVENT
            // drag events
            isDragOver: false,
            dragClass: {
                dragOverHiglight: "dropzone dropzone--over",
                dragOverDefault: "dropzone"
            },
            inputDataAvailable: false,
            // "Begin Slice!" button
            sliceText: "slice-btn",
            // # DATA
            // ! WIP
            inputFileRead: [],
            inputFileData: [],
            // ! WIP
            // id: [],

            // ! WIP
            inputField: []
            // inputField: [
            //     {
            //         fileRead: [],
            //         id: <number>
            //     }
            // ]
        };

        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFileDrop = this.handleFileDrop.bind(this);
        this.getFileBlob = this.getFileBlob.bind(this);
        this.processResults = this.processResults.bind(this);
        // ! WIP
        this.handleBeginSlicBtn = this.handleBeginSlicBtn.bind(this);
        // Toggle
        this.toggleBegingSliceText = this.toggleBegingSliceText.bind(this);
        // this.setInputField = this.setInputField.bind(this);
        this.handleOnDragEnd= this.handleOnDragEnd.bind(this);
    }

    componentWillUnmount() {
        console.log("UNMOUNTING...");
    }

    componentDidMount() {
        console.log("MOUNTING...");
    }

    componentDidUpdate() {
        console.log("COMPONENT UPDATING...");
    }

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

    // FETCHING FILE READ
    // - VALIDATE
    // - setState to "inputFileRead"
    // - setState to "inputField"
    // - TOGGLE class
    handleFileDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        Object.values(files).forEach((obj) => {
            // VALIDATE
            if (!validFileType(obj.type)) {
                // TODO
                // ! Alert timeout error
                console.log("Invalid file!");

                return false;
            } else {
                // ! LOG
                // console.log("Valid file!");

                // VALIDATED FILES
                const arrFiles = Object.values(files);
                const acceptedFiles = arrFiles.filter((file) => validFileType(file.type))

                // ! LOG
                console.log("ACCEPTED", acceptedFiles);

                // Get input Element
                // const inputElement = e.target.lastElementChild;
                // console.log("ELEMENT", inputElement);

                // Updata data array
                if (acceptedFiles) {
                    this.setState((currentState) => ({
                        inputFileRead: [...currentState.inputFileRead, ...acceptedFiles]
                    }), () => {
                        console.log("LOG UPDATE STATE 'fileRead'", this.state.inputFileRead);
                    })

                    // Set to true when file input is available
                    if (this.state.inputFileRead) {
                        this.setState({
                            inputDataAvailable: true
                        })
                    } else {
                        console.log("Nothing in place")
                    }
                }

            }
        })


        // ! WIP
        this.setState((currentState) => {
            let fileLength = currentState.inputFileRead.length;

            console.log("SET STATE - FILE LENGTH", fileLength);
            console.log("SET STATE - FILE READ", currentState.inputFileRead);

            let updatedInputFields = [];
            let idArr = [];
            let fileReadArr = currentState.inputFileRead;

            // Create idArr
            for (let i = 0; i < fileLength; i++) {
                idArr.push(i);
            }

            // Create new Update Input Fields
            for (let i = 0; i < fileLength; i++) {
                const objId = {};
                const objFileRead = {};

                objId["id"] = idArr[i];
                objFileRead["fileRead"] = fileReadArr[i];

                updatedInputFields.push({...objId, ...objFileRead});
            }

            // return ({
            //     id: [...idArr]
            // })

            // Seems like I have updated the entire field
            return ({
                inputField: [
                    ...updatedInputFields
                ]
            })

            // if (fileLength === 0) {
            //     return ({
            //         id: [...currentState.id, (fileLength)]
            //     })

            // } else {
            //     return ({
            //         id: [...currentState.id, (fileLength + 1)]
            //     })
            // }

        }, () => {
            // console.log("STATE ID: ", this.state.id);
            console.log("STATE FIELDS: ", this.state.inputField);
        });


        // ! WIP >>

        // let fileRead = this.state.inputFileRead;

        // fileRead.forEach((file) => {

        //     if (this.inputField === []) {
        //         this.setState((currentState) => ({
        //             inputField: [
        //                 ...currentState.inputField,
        //                 {
        //                     fileRead: file,
        //                     id: 0
        //                 }
        //             ]
        //         }), () => {
        //             console.log("LOG UPDATE STATE 'fileRead'", this.state.inputField.fileRead);
        //             console.log("LOG UPDATE STATE 'fileRead'", this.state.inputField.id);
        //         })
        //     } else {
        //         this.setState((currentState) => ({
        //             inputField: [
        //                 ...currentState.inputField,
        //                 {
        //                     fileRead: file,
        //                     id: currentState.inputField.length + 1
        //                 }
        //             ]
        //         }), () => {
        //             console.log("LOG UPDATE STATE 'fileRead'", this.state.inputField.fileRead);
        //             console.log("LOG UPDATE STATE 'fileRead'", this.state.inputField.id);
        //         })
        //     }

        // });

        // ! <<

        // ! Log
        // console.log("HANDLE FILE DROP #NAME: ", files["0"]["name"]);
        // console.log("HANDLE FILE DROP #DEFAUTL: ", files);
        // console.log("HANDLE FILE DROP #SPREAD: ", ...files);
        // console.log("HANDLE FILE DROP #SPREAD: ", ...files);

        // ! Log
        // console.log(e.dataTransfer.files);
        // console.log("LOG UPDATE STATE 'fileRead'", this.state.inputFileUpload.fileRead);

        this.setState({
            isDragOver: false
        })
    }

    // FETCHING FILE BLOB
    getFileBlob(blob) {

        // ! LOG
        // console.log("RECEIVING :", blob);

        // ! LOG
        console.log("BLOB ARR :", fileBlobs);

        this.setState((currentState) => ({
            inputFileData: [...currentState.inputFileData, blob]
        }), () => {
            console.log("LOG UPDATE STATE 'fileData'", this.state.inputFileData);
        });
    }

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
        console.log("IMAGES AVAILABLE RAW: ", sourceImagesRaw);
        console.log("IMAGES AVAILABLE ARR: ", sourceImages);
        console.log("IMAGES AVAILABLE ARR [0]: ", sourceImages[0]);

        let processImages = [];

        sourceImages.forEach((img) => {
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;

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
            // pixel based
            const webtoonMaxWidth = 800;
            const webtoonMaxHeight = 1280;
            const aspectRatio = webtoonMaxWidth / webtoonMaxHeight;

            // ! LOG
            // console.log("ASPECT RATIO: ", aspectRatio);

            // based on aspect ratio, what the height should be...
            const determinedeHeight = width / aspectRatio;

            // CONDITION:
            // If file image naturalHeight is shorter than determinedHeight,
            // return as is
            if (determinedeHeight > maxHeight) {
                // ! WIP
                console.log("CONDITION PASS: determinedeHeight > maxHeight", "DETERMINED", determinedeHeight, "MAX", maxHeight)

                canvas.width = imgWidth;
                canvas.height = imgHeight;
                context.drawImage(
                    img, 0, 0, imgWidth, imgHeight
                );

                const result = canvas.toDataURL();

                processImages.push(result);
            } else {

                // ! LOG
                console.log("DETERMINED HEIGHT: ", determinedeHeight);

                let timesToSlice = Math.floor(maxHeight / determinedeHeight);

                // ! LOG
                console.log("SLICE X: ", timesToSlice);

                let currentSlice = 0;
                let newYPosition = 0;
                // let newYPosition = determinedeHeight * currentSlice;

                // ! LOG
                console.log("NEW Y POS: ", newYPosition);

                // ! WIP
                // - Test with longer images

                let slicedImages = [];

                while (timesToSlice > currentSlice) {
                    // currentSlice++;

                    newYPosition = determinedeHeight * currentSlice;
                    // CROP HERE
                    // ? Refactor to a function
                    canvas.width = width;
                    canvas.height = determinedeHeight;
                    context.drawImage(
                        img, 0, newYPosition, width, determinedeHeight, 0, 0, width, determinedeHeight
                    );

                    // let result = canvas.toDataURL();

                    // !LOG
                    // console.log("RESULT ", currentSlice, " ", result);
                    // console.log("RESULT ", currentSlice, " ", result);

                    slicedImages.push(canvas.toDataURL());
                    // processImages.push(result);

                    currentSlice++;
                }

                // * CONDTION: Odd number
                // Get last coordinate
                const remainCoordinateY = timesToSlice * determinedeHeight;
                // ! WIP >>
                const remainHeight = maxHeight - remainCoordinateY;

                // ! LOG
                console.log(remainHeight);
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
                console.log("SLICED IMAGES", slicedImages);

                processImages.push(...slicedImages);
            }



        });

        // ! LOG
        // return data URL
        console.log("NEW IMAGES: ", processImages);

        const zip = new JSZip();

        for (let i = 0; i < processImages.length; i++) {

            zip.file(`PG_${i}.jpg`, processImages[i].substr(processImages[i].indexOf(',') + 1), { base64: true });

        }

        zip.generateAsync({ type: "blob", mimeType: "image/jpeg" })
            .then(function (blob) {

                // ! LOG
                console.log("BLOB #2", blob);

                saveAs(blob, "example.zip");
            })

    }

    // "Begin Slice!" button
    handleBeginSlicBtn(e) {
        e.preventDefault();

        //! LOG
        console.log("Processing results...");
        this.processResults();

        console.log("Handle Begin Slice Button")
        this.toggleBegingSliceText();

    }

    toggleBegingSliceText() {
        console.log("Toggle...")

        // Toggle class
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
        // Toggle text to icon, or vice versa

    }

    handleOnDragEnd(result) {
        // ! LOG
        console.log("DnD HANDLE EVENT", result);

        // Create shallow copy
        const items = Array.from(this.state.inputField);
        // const items = this.state.inputField;

        // ! LOG
        console.log("DnD HANDLE EVENT - ITEMS", items);

        // ! LOG
        console.log("DnD HANDLE EVENT - ARR ITEMS", items);

        const [reorderedItem] = items.splice(result.source.index, 1);

        // ! LOG
        console.log("DnD HANDLE EVENT - reorderedItem", reorderedItem);

        items.splice(result.destination.index, 0, reorderedItem);
        // ! LOG
        console.log("DnD HANDLE EVENT - MODIFIED ITEMS", items);

        this.setState({
            inputField: items
        })
    }

    // "Close" button
    handleRemoveSelf(e) {
        console.log(e.target);
    }

    render() {
        return (
            <main>
                <h2>Start Here</h2>
                <FormUpload
                    onHandleDrag={this.handleDrag}
                    onHandleDragLeave={this.handleDragLeave}
                    dragOverClass={this.state.isDragOver ? this.state.dragClass.dragOverHiglight : this.state.dragClass.dragOverDefault}
                    onHandleFileDrop={this.handleFileDrop}
                    // ? Not sure if in use...
                    inputFileRead={this.state.inputFileRead}
                    getFileBlob={this.getFileBlob}

                    // ! WIP
                    inputField={this.state.inputField}
                    handleOnDragEnd={this.handleOnDragEnd}

                // onHandleChange={this.handleChange}

                // inputFileElement={this.state.inputDataAvailable
                //     ? <input className="dropzone__input" type="file" accept="image/png, image/jpeg" multiple ref={input => this.fileInput = input} />
                //     : null}

                //     previewComponent={this.state.inputDataAvailable === true
                //         ? <Preview inputFileRead={this.state.inputFileRead} />
                //         : null}
                />

                <FormSelect />
                <FormOptions />
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
                <FormResults />
            </main>
        )
    }
}