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

const fileTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
];

function validFileType(file) {
    return fileTypes.includes(file);
}

const createId = function getUniqueId() {
    if (window.crypto && window.crypto.getRandomValues) {
        return window.crypto.getRandomValues(new Uint32Array(1))[0];
    } else {
        return Math.random()
    }
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
            // inputFileRead: [],
            inputFileData: [],
            inputField: []
            // inputField: [
            //     {
            //         fileRead: [],
            //         id: <number>
            //     }
            // ]
        };

        // Methods
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFileDrop = this.handleFileDrop.bind(this);
        this.processResults = this.processResults.bind(this);
        this.handleBeginSlicBtn = this.handleBeginSlicBtn.bind(this);
        // Toggle Class
        this.toggleBegingSliceText = this.toggleBegingSliceText.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        // Delete Data
        this.handleRemoveSelf = this.handleRemoveSelf.bind(this);
        // ? I don't know if use this blub
        this.getFileBlob = this.getFileBlob.bind(this);
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
    // - setState to "inputField"
    // - TOGGLE class
    handleFileDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        // ! LOG
        // console.log("HANDLE FILE DROP: ", files);

        Object.values(files).forEach((obj) => {
            // ! LOG
            // console.log("HANDLE FILE DROP - OBJ: ", obj);
            // console.log("HANDLE FILE DROP - OBJ-TYPE: ", obj.type);

            // VALIDATE
            if (!validFileType(obj.type)) {
                // TODO
                // ! Alert timeout error
                console.log("Invalid file!");

                return false;
            } else {
                // ! LOG
                // console.log("Valid file!");

                // ! LOG
                // console.log("ACCEPTED", obj.type, obj);

                this.setState((currentState) => ({
                    inputField: [
                        ...currentState.inputField,
                        {
                            fileRead: obj,
                            id: createId()
                        }
                    ]
                }), () => console.log("HANDLE FILE DROP LOG UPDATE: ", this.state.inputField))
            }
        })

        // Set to true when file input is available
        if (this.state.inputField) {
            this.setState({
                inputDataAvailable: true
            })
        } else {
            console.log("Nothing in place")
        }

        this.setState({
            isDragOver: false
        });
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
                    // console.log("RESULT ", currentSlice, " ", result);

                    slicedImages.push(canvas.toDataURL());

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
    // "Close" button
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
        console.log("HANDLE REMOVESELF - ALL CONTENTS: ", sourceThumbnails);

        const arrThumbnails = Array.from(sourceThumbnails);

        // ! LOG
        console.log("HANDLE REMOVESELF - ALL CONTENTS ARR: ", arrThumbnails);

        // Create shallow copy
        const items = Array.from(this.state.inputField);

        const removeItemIndex = arrThumbnails.indexOf(e.target.parentElement);

        // ! LOG
        console.log("HANDLE REMOVESELF - TARGET INDEX: ", removeItemIndex);

        items.splice(removeItemIndex, 1);

        // ! LOG
        console.log("HANDLE REMOVESELF - NEW ARR: ", items);

        this.setState({
            inputField: items
        }, () => console.log("HANDLE REMOVESELF - CURRENT STATE: ", this.state.inputField))

        console.log("HANDLE REMOVESELF - CURRENT STATE: ", this.state.inputField)
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
                    onRemoveSelf={this.handleRemoveSelf}
                    inputField={this.state.inputField}
                    // ? Rename
                    onhandleOnDragEnd={this.handleOnDragEnd}

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