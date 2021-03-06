import React from 'react'

// TODO
// Create component for select options
// Options should return data
// Add checkbox animation

// ! WIP - data should be in parent (?)
const selectOptions = [
    {
        displayName: "Webtoon",
        idName: "webtoon",
        // ratioWidth: "",
        // ratioHeight: ""
        icon: "",
        available: true
    },
    {
        displayName: "tapas",
        idName: "tapas",
        // ratioWidth: "",
        // ratioHeight: ""
        icon: "",
        available: false
    }
];

const alertMessages = {
    alertMax: "Total file sizes is over maximum 20MB. Delete some files, or clear upload and try again with less files.",
    alertFile: "Oh no! Currently, we accept .png and .jpeg, .jpg image file extensions.",
    alertSelectMandatory: "Please select at least one."
};


export default function FormSelect() {
    return (
        <section className="form-select">
            <h3>2. Select</h3>
            <p>Select webcomic platform to base slicing ratio. You may select more than one.
            *Currently, Webtoon is only available.</p>

            <div className="select-container">
                <div className="select-option">
                    <label htmlFor="webtoon">
                        <div className="select-label--wrapper">
                            <input type="checkbox" id="webtoon" />
                            <span className="select-label">
                                <img className="select-icon" src="images/webtoon-icon.svg" alt="webtoon icon" />
                                <span className="select-text">Webtoon</span>
                            </span>
                        </div>
                    </label>
                </div>
                <div className="select-option">
                    <label htmlFor="tapas">
                        <div className="select-label--wrapper">

                            <input type="checkbox" id="tapas" disabled />
                            <span className="select-label">
                                <img className="select-icon" src="images/tapas-icon.png" alt="tapas icon" />
                                <span className="select-text">Tapas</span>
                            </span>
                        </div>
                    </label>
                </div>
            </div>

            {false
                ? <div className="alert-message--error">
                    <img className="alert-icon" src="images/error-icon.svg" alt="" />
                    <span className="alert-message-text--error">
                        {true
                            ? alertMessages.alertSelectMandatory
                            : null}
                    </span>
                </div>
                : null}
        </section>
    )
}