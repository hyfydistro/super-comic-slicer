import React, { useState } from 'react';
// import { ReactSortable } from "react-sortablejs";
// import { ReactSortable } from "https://cdn.jsdelivr.net/npm/react-sortablejs@6.0.0/dist/index.min.js";

const alertMessages = {
    alertMax: "Total file sizes is over maximum 20MB. Delete some files, or clear upload and try again with less files.",
    alertFile: "Oh no! Currently, we accept .png and .jpeg, .jpg image file extensions.",
};

const sucessMessages = {
    successReady: "The following files are accepted."
}
// TODO
// components consideration
// - dropzone
// - preview

// TODO
// - [ ] roate image function >> on condition
// - Pass Props:
// - id
// - name
function Preview(props) {

    const files = props.inputField;

    if (files) {

        // ! LOG
        console.log("INSIDE <PREVIEW>: ", props.inputField);
        // console.log("INSIDE <PREVIEW>: ", props.inputField[0]["id"]);

        const previewThumbnailElements = files.map((file, i) => {

            console.log("INSIDE <PREVIEW> fileRead: ", file.fileRead);
            console.log("INSIDE <PREVIEW> fileRead - name: ", file.fileRead.name);
            console.log("INSIDE <PREVIEW> id: ", file.id);

            const reader = new FileReader();
            reader.readAsDataURL(file.fileRead);
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
                    key={file.id}
                    className="preview__thumbnail-container"
                    data-label={JSON.stringify(file.fileRead.name)}
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
                        {/* <ReactSortable> */}

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
                        {/* </ReactSortable> */}
                    </div>
                    <div className="preview__clear-btn-container">
                        <button className="preview__clear-btn">Clear Files</button>
                    </div>
                </div>
            </div>
        )
    }
}


function Dropzone(props) {
    return (
        <div className="dropzone-container">
            <div
                className={props.dragOverClass}
                onDragOver={(e) => props.onHandleDrag(e)}
                onDragEnter={(e) => props.onHandleDrag(e)}
                onDragEnd={(e) => props.onHandleDragLeave(e)}
                onDragLeave={(e) => props.onHandleDragLeave(e)}
                onDrop={(e) => props.onHandleFileDrop(e)}
            >
                <img className="dropzone__upload-icon" src="./images/upload-icon.svg" alt="Drag & Drog Icon" />
                <p>Drag & Drop or Click here</p>
                <p className="text-small">to upload your files.(max. 20MB)</p>
                {/* {props.inputFileElement} */}

                <input onChange={props.onHandleChange} className="dropzone__input" type="file" accept="image/png, image/jpeg" multiple />
            </div>

        </div>
    )
}



export default function FormUpload(props) {
    // ! LOG
    // console.log("INSIDE FORM :", props.previewComponent);

    return (
        <section className="form-upload">

            <h3>1. Upload</h3>

            <p>Currently, .png and .jpeg (including .jpg) are accepted. If width of image is larger than height, it will be automatically roated. A "rotate" option will be available on next update. 😗</p>

            <Dropzone
                onHandleDrag={props.onHandleDrag}
                onHandleDragLeave={(e) => props.onHandleDragLeave(e)}
                dragOverClass={props.dragOverClass}
                onHandleFileDrop={(e) => props.onHandleFileDrop(e)}

                // inputFileElement={props.inputFileElement}
                onHandleChange={props.onHandleChange}
            />

            {false
                ? <div className="alert-message--error">
                    <img className="alert-icon" src="images/error-icon.svg" alt="" />
                    <span className="alert-message-text--error">
                        {true
                            ? alertMessages.alertFile
                            : null}
                    </span>
                </div>
                : null}

            {false
                ? <div className="alert-message--success">
                    <img className="alert-icon" src="images/check-icon.svg" alt="" />
                    <span className="alert-message-text--success">
                        {true
                            ? sucessMessages.successReady
                            : null}
                    </span>
                </div>
                : null}

            <p>If you have more than one image file, you may drag and re-order.</p>

            <Preview
                inputFileRead={props.inputFileRead}
                inputField={props.inputField}
            />
        </section>
    )
}

// TODO
// [x] Create a drop area
// [x] Preview Image Thumbnail
// [x] Preview Image Text
// [ ] "X" event button to
// Delete itself from UI and data
// ? or just update array
// [ ] Creat a click to browse and
// add to upload list

// Tools
// - SortableJS