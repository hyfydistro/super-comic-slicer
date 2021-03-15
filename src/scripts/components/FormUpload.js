import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// libs
import convertBytes from '../libs/convertBytes';

// TODO: FEATURE (NEXT UPDATE)
// "Rotate" button in Preview thumb
// Also see in 'Form.js'

function Thumbnails(props) {
    const files = props.inputField;

    let previewThumbnailElements;

    if (files) {

        previewThumbnailElements = files.map((file, index) => {

            const reader = new FileReader();
            reader.readAsDataURL(file.fileRead);
            reader.addEventListener("load", getDataURL)

            function getDataURL() {
                const currentElement = document.querySelectorAll(".preview__thumbnail-container")[index].lastElementChild.firstElementChild;

                currentElement.src = reader.result;
            }

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
                    <span className="file-size-text">Total File Size: {convertBytes(props.getTotalFileSize)}</span>
                </div>
                    <button className="preview__clear-btn" onClick={props.onHandleClickToRemoveAll}>Clear Files</button>
                </div>
            </div>
        </div>
    )
}

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
                onHandleClickToUpload={props.onHandleClickToUpload}
                onHandleChange={props.onHandleChange}
                // STYLE EVENTS
                toggleDropzoneBordersClass={props.toggleDropzoneBordersClass}
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