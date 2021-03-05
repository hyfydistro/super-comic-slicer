import React from 'react'

export default function Intro() {
    return (
        <section className="intro">
            <div className="intro--text">
                <p>
                    Webcomic publishing platforms, such as Webtoon and Tapas, constrain artists from delivering their comics with uneven ratio and/or file sizes that are too large.
            </p>
                <p>
                    Super Comic Slicer is a web application that handles artists’ long comic page and divides them within the webcomic’s constraint ratio. It also has a feature called “squash” which allows to scale down the comic size.
            </p>
                <p>
                    Finally, you can just get on and just publish the dam comic without all the hassles!
            </p>
            </div>
            <img src="images/salespitch.svg" alt="Divide. Optmize. Publish." />
        </section>
    )
}