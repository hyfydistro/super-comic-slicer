import React from 'react'

const alertMessages = {
    alertMax: "Total file sizes is over maximum 20MB. Delete some files, or clear upload and try again with less files.",
    alertFile: "Oh no! Currently, we accept .png and .jpeg, .jpg image file extensions."
};

// TODO
// components consideration
// - dropzone
// - preview


export default function FormUpload() {
    return (
        <section className="form-upload">

            <h3>1. Upload</h3>

            <p>Currently, .png and .jpeg (including .jpg) are accepted. </p>

            <div className="dropzone-container">
                <div className="dropzone">
                    <img className="dropzone__upload-icon" src="./images/upload-icon.svg" alt="Drag & Drog Icon" />
                    <p>Drag & Drop or Click here</p>
                    <p className="text-small">to upload your files.(max. 20MB)</p>
                    <input type="file" accept="image/png, image/jpeg" multiple />
                </div>
            </div>

            {true
                ? <div className="alert-message--error">
                    <span className="alert-message-text--error">
                        {true
                            ? alertMessages.alertFile
                            : null}
                    </span>
                </div>
                : null}

            <p>If you have more than one image file, you may drag and re-order.</p>

            <div className="preview-wrapper">
                <div className="preview-container">
                    <div className="preview">
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                        <div className="preview__image-block">
                            <button className="close-btn"></button>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="preview__clear-btn-container">
                        <button className="preview__clear-btn">Clear Files</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// TODO
// Create a drop area
    // - create text
    // - add image
// Creat a click to browse
// Create dragable area
// use images from upload to preview images
    // add an event when click on "X" icon it will delete
        // also update in upload file array
// Tools
// - SortableJS