import React from 'react';

// TODO
// Create a list component for the following data

function FileExtensionOptions(props) {

    const fileExtensionsList = props.getFilExtensionsModel.map((fileExtObj, index) => {
        if (props.getFilExtensionsModel[0] === fileExtObj) {
            return (
                <div className="radio-option" key={index}>
                    <label htmlFor={fileExtObj.htmlLabel}>
                        <input
                        defaultChecked
                        type="radio"
                        name="filetype"
                        value={fileExtObj.htmlLabel}
                        id={fileExtObj.htmlLabel}
                            onClick={(e)  => props.onHandleOptionsFileExtenions(e)}
                        />
                        <span className="select-text">{fileExtObj.text}</span>
                    </label>
                </div>
            )
        } else {
            return (
                <div className="radio-option" key={index}>
                    <label htmlFor={fileExtObj.htmlLabel}>
                        <input
                        type="radio"
                        name="filetype"
                        value={fileExtObj.htmlLabel}
                        id={fileExtObj.htmlLabel}
                            onClick={(e)  => props.onHandleOptionsFileExtenions(e)}
                        />
                        <span className="select-text">{fileExtObj.text}</span>
                    </label>
                </div>
            )
        }
    });

    return fileExtensionsList;
}

export default function FormOptions(props) {
    return (
        <section className="form-options">
            <h3>3. Options</h3>

            <p className="text-bold header-four">File Extensions</p>

            <div className="radio-container-filetype">
                <FileExtensionOptions
                    getFilExtensionsModel={props.getFilExtensionsModel}
                    onHandleOptionsFileExtenions={props.onHandleOptionsFileExtenions}
                />
            </div>


            <p className="text-bold header-four">Squash</p>

            <p className="margin-fix">Squash scale down the comic page size. If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will yield the same page division.</p>

            <div className="radio-container-squash">
                <div className="radio-option">
                    <label htmlFor="none">
                        <input type="radio" name="squash" value="" id="none" />
                        <span className="select-text">none</span>
                    </label>
                </div>
                <div className="radio-option">
                    <label htmlFor="400">
                        <input type="radio" name="squash" value="" id="400" />
                        <span className="select-text">400 width pixels</span>
                    </label>
                </div>
                <div className="radio-option">
                    <label htmlFor="500">
                        <input type="radio" name="squash" value="" id="500" />
                        <span className="select-text">500 width pixels</span>
                    </label>
                </div>
                <div className="radio-option">
                    <label htmlFor="600">
                        <input type="radio" name="squash" value="" id="600" />
                        <span className="select-text">600 width pixels</span>
                    </label>
                </div>
                <div className="radio-option">
                    <label htmlFor="700">
                        <input type="radio" name="squash" value="" id="700" />
                        <span className="select-text">700 width pixels</span>
                    </label>
                </div>
            </div>
        </section>
    )
}