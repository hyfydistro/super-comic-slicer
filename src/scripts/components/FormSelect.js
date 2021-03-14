import React from 'react'

// TODO
// Create component for select options
// Options should return data


function WebcomicsOptions(props) {

    const webcomicsList = props.getWebcomicsModel.map((currentWebcomic, tabindex) => {

        if (currentWebcomic.disabled) {
            return (
                <div className="select-option" key={tabindex}>
                <label htmlFor={currentWebcomic.htmlLabel}>
                    <div className="select-label--wrapper">
                        <input type="checkbox" id={currentWebcomic.htmlLabel} disabled />
                        <span className="select-label">
                            <img className="select-icon" src={currentWebcomic.imageSource} alt={currentWebcomic.htmlAlt} />
                            <span className="select-text">{currentWebcomic.text}</span>
                        </span>
                    </div>
                </label>
            </div>
            )
        } else {
            return (
                <div className="select-option" key={tabindex}>
                    <label htmlFor={currentWebcomic.htmlLabel}>
                        <div className="select-label--wrapper">
                            <input
                            type="checkbox"
                            id={currentWebcomic.htmlLabel}
                            value={currentWebcomic.htmlLabel}
                            onClick={(e) => props.onHandleSelectedWebcomic(e)}
                            />
                            <span className="select-label">
                                <img className="select-icon" src={currentWebcomic.imageSource} alt={currentWebcomic.htmlAlt} />
                                <span className="select-text">{currentWebcomic.text}</span>
                            </span>
                        </div>
                    </label>
                </div>
            )
        }
    });

    return webcomicsList;
}

export default function FormSelect(props) {
    return (
        <section className="form-select">
            <h3>2. Select</h3>
            <p>Select webcomic platform to base slicing ratio. You may select more than one.
            *Currently, Webtoon is only available.</p>

            <div className="select-container">

                <WebcomicsOptions
                getWebcomicsModel={props.getWebcomicsModel}
                onHandleSelectedWebcomic={props.onHandleSelectedWebcomic} />

                {/* <div className="select-option">
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
                </div> */}

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