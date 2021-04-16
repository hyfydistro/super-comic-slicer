// TODO: FEATURE (NEXT UPDATE)
// Stimulate client side form with some third party API (research needed)
// Consider formikk, React Form Hook
// TODO
// CREATE alert message for Contact data
// write better alert messages 😛

// ! WIP
// const alertMessages = {
//     alertMax: "Total file sizes is over maximum 20MB. Delete some files, or clear upload and try again with less files.",
//     alertFile: "Oh no! Currently, we accept .png and .jpeg, .jpg image file extensions.",
//     alertInputNameMax: "maxium characters allowed are 100",
//     alertInputEmailMax: "Only alphabet, numbers and _ allowed",
//     alertInputEmailMax: "maxium characters allowed are 125",
//     alertInputMessageMax: "maxium characters allowed are 500",
// };

export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>Send me an email and say "Hi"! Feedbacks are welcome. Any known issues found, let me know and I'll see what I can do. If there’s a feature you’d like me to add or more webcomic platforms I know none of, write me a mention. 😃</p>

            <div className="contact-form__wrapper">
                <a href="mailto:hyfydistro@gmail.com" className="email-link">hyfydistro@gmail.com</a>
            </div>

            {/* <form action="mailto:hyfydistro@gmail.com">
                <div className="contact-input-wrapper">
                    <label className="contact-label" htmlFor="name">Name</label>
                    <input className="contact-input" id="name" type="text" placeholder="Min-Hyuk Park" />
                </div>
                <div className="contact-input-wrapper">
                    <label className="contact-label" htmlFor="subject">Subject</label>
                    <input className="contact-input" id="subject" type="text" placeholder="Min-Hyuk Park" />
                </div>
                {false
                    ? <div className="alert-message--error">
                        <img className="alert-icon" src="images/error-icon.svg" alt="" />
                        <span className="alert-message-text--error">
                            {true
                                ? alertMessages.alertInputEmailMax
                                : null}
                        </span>
                    </div>
                    : null}

                <div className="contact-input-wrapper">
                    <label className="contact-label" htmlFor="email">Email</label>
                    <input className="contact-input" id="email" type="email" placeholder="example@example.com" />
                </div>

                {false
                    ? <div className="alert-message--error">
                        <img className="alert-icon" src="images/error-icon.svg" alt="" />
                        <span className="alert-message-text--error">
                            {true
                                ? alertMessages.alertInputEmailMax
                                : null}
                        </span>
                    </div>
                    : null}

                <div className="contact-input-wrapper">
                    <label className="contact-label">Message</label>
                    <textarea className="contact-input" placeholder="hyuk hyuk hyuk"></textarea>
                </div>

                {false
                    ? <div className="alert-message--error">
                        <img className="alert-icon" src="images/error-icon.svg" alt="" />
                        <span className="alert-message-text--error">
                            {true
                                ? alertMessages.alertInputMessageMax
                                : null}
                        </span>
                    </div>
                    : null}

                <button type="submit" className="send-message-btn-container">
                    <a className="send-message-slice-btn"><h3>Send Message</h3></a>
                </button>
            </form> */}
        </section>
    )
}
