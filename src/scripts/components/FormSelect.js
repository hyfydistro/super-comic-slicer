const webcomicsModel = [
    {
        htmlLabel: "webtoon",
        imageSource: "images/icon-webtoon.svg",
        htmlAlt: "webtoon icon",
        text: "Webtoon",
        disabled: false
    },
    {
        htmlLabel: "tapas",
        imageSource: "images/icon-tapas.png",
        htmlAlt: "tapas icon",
        text: "Tapas",
        disabled: true
    },
];

function WebcomicsOptions(props) {

    // const webcomicsList = props.getWebcomicsModel.map((currentWebcomic, tabindex) => {
    const webcomicsList = webcomicsModel.map((currentWebcomic, tabindex) => {

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
                    onHandleSelectedWebcomic={props.onHandleSelectedWebcomic}
                />
            </div>

            {/* CONDITION */}
            {props.isAlertMessageSelectFormError === true
                ? <div className="alert-message--error">
                    <i className="alert-icon alert-icon--error icon-warning"></i>
                    <span className="alert-message-text--error">
                        {props.getAlertMessageSelectFormText}
                    </span>
                </div>
                : null}
        </section>
    )
}