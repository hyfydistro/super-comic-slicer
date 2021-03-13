import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const alertMessages = {
    alertMax: "Total file sizes is over maximum 20MB. Delete some files, or clear upload and try again with less files.",
    alertFile: "Oh no! Currently, we accept .png and .jpeg, .jpg image file extensions.",
};

const sucessMessages = {
    successReady: "The following files are accepted."
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
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
// - [ ] Create alert messages box on CONDITION

// TODO: ALERT MESSAGES
// - [x] (success) When "Clear Files" is clicked, notify w/ setTimeout Files removed
// - [x] (error) When unaccepted files are chose, notify w/ setTimeout
// - [x] (warning) When file size is near maximum, notify w/ setTimeout
// - Disable "Let's Slice" button
// - [x] (error) When file size is over maximum, notify w/ setTimeout
// Disable "begin Slice!" button

// console.log("EXIST", DragDropContext);

function Thumbnails(props) {
    const files = props.inputField;

    let previewThumbnailElements;

    if (files) {

        // ! LOG
        console.log("INSIDE <PREVIEW>: ", props.inputField);
        // console.log("INSIDE <PREVIEW>: ", props.inputField[0]["id"]);

        previewThumbnailElements = files.map((file, index) => {

            console.log("INSIDE <PREVIEW> fileRead: ", file.fileRead);
            console.log("INSIDE <PREVIEW> fileRead - name: ", file.fileRead.name);
            console.log("INSIDE <PREVIEW> id: ", file.id);

            const reader = new FileReader();
            reader.readAsDataURL(file.fileRead);
            reader.addEventListener("load", getDataURL)

            function getDataURL() {
                console.log("MAKING DATA URL...", reader);

                const currentElement = document.querySelectorAll(".preview__thumbnail-container")[index].lastElementChild.firstElementChild;

                // ! Log
                console.log(currentElement);

                currentElement.src = reader.result;
            }

            // ! LOG
            // console.log("READER: ", reader);
            // console.log("SOURCE: ", dataURLs);
            // console.log("SOURCE: 0", dataURLs[0]);


            return (
                <Draggable key={file.id} draggableId={file.id.toString()} index={index}>
                    {
                        (provided) => (
                            <div
                                className="preview__thumbnail-container"
                                data-label={JSON.stringify(file.fileRead.name)}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <button className="close-btn" onClick={(e) => props.onRemoveSelf(e)}></button>
                                <div className="preview__thumbnail">
                                    <img alt="" />
                                </div>
                            </div>
                        )
                    }
                </Draggable>
            )
        })

    }

    return previewThumbnailElements;
}

function Preview(props) {

    return (
        <div className={props.togglePreviewWrapperClass}>
            <div className="preview-container">

                <DragDropContext onDragEnd={props.onhandleDragEnd}>
                    <Droppable droppableId="preview" direction="horizontal">
                        {(provided) => (
                            <div className="preview" {...provided.droppableProps} ref={provided.innerRef}>
                                <Thumbnails inputField={props.inputField} onRemoveSelf={props.onRemoveSelf} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="preview__clear-btn-container">
                <div className="file-size__container">
                    <span className="file-size-text">Total File Size: {returnFileSize(props.getTotalFileSize)}</span>
                </div>
                    <button className="preview__clear-btn" onClick={props.onHandleClickToRemoveAll}>Clear Files</button>
                </div>
            </div>
        </div>
    )
}


// TODO
// Show total file size
function Dropzone(props) {
    return (
        <div className="dropzone-container">
            <div
                className={props.toggleDropzoneBordersClass}
                onDragOver={(e) => props.onHandleDrag(e)}
                onDragEnter={(e) => props.onHandleDrag(e)}
                onDragEnd={(e) => props.onHandleDragLeave(e)}
                onDragLeave={(e) => props.onHandleDragLeave(e)}
                onDrop={(e) => props.onHandleFileDrop(e)}
                onClick={props.onHandleClickToUpload}
            >
                <img className="dropzone__upload-icon" src="./images/upload-icon.svg" alt="Drag & Drog Icon" />
                <p>Drag & Drop or Click here</p>
                <p className="text-small">to upload your files (max. 20MB)</p>

                <input onChange={(e) => props.onHandleInputChange(e)} className="dropzone__input" type="file" accept="image/png, image/jpeg" multiple />
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

            {/*
            TODO
            - Style
            - Bullet list points
            */}
                <ul>
                <li>Currently, PNG and JPEG (including JPG) are accepted.</li>
                <li>If width of image is larger than height, it will be returned as is.</li>
                <li></li>
            </ul>

            <p>Currently, .png and .jpeg (including .jpg) are accepted. If width of image is larger than height, it will be automatically roated. A "rotate" option will be available on next update. 😗</p>

            <Dropzone
                // EVENTS
                onHandleDrag={props.onHandleDrag}
                onHandleDragLeave={(e) => props.onHandleDragLeave(e)}
                onHandleFileDrop={(e) => props.onHandleFileDrop(e)}
                onHandleInputChange={(e) => props.onHandleInputChange(e)}
                // STYLE EVENTS
                toggleDropzoneBordersClass={props.toggleDropzoneBordersClass}

                // ! WIP
                onHandleClickToUpload={props.onHandleClickToUpload}
                onHandleChange={props.onHandleChange}
            />

            {props.isAlertMessageError === true
                ? <div className="alert-message--error">
                    <img className="alert-icon" src="images/error-icon.svg" alt="icon" />
                    <span className="alert-message-text--error">
                        {props.getAlertErrorText}
                    </span>
                </div>
                : null}

            {props.isAlertMessageSuccess === true
                ? <div className="alert-message--success">
                    <img className="alert-icon" src="images/check-icon.svg" alt="icon" />
                    <span className="alert-message-text--success">
                        {props.getAlertSuccessText}
                    </span>
                </div>
                : null}

            {props.isAlertMessageWarning === true
                ? <div className="alert-message--warning">
                    <img className="alert-icon" src="images/warning-icon.svg" alt="icon" />
                    <span className="alert-message-text--warning">
                        {props.getAlertWarningText}
                    </span>
                </div>
                : null}

            {props.inputField.length !== 0
                ? <p>If you have more than one image file, you may drag and re-order.</p>
                : null}

            {props.inputField.length !== 0
                ? <Preview
                    inputField={props.inputField}
                    onhandleDragEnd={props.onhandleDragEnd}
                    onRemoveSelf={props.onRemoveSelf}
                    togglePreviewWrapperClass={props.togglePreviewWrapperClass}
                    onHandleClickToRemoveAll={props.onHandleClickToRemoveAll}
                    getTotalFileSize={props.getTotalFileSize}
                />
                : null}


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