import React from 'react';

// TODO
// Create a list component for the following data

const fileTypes = ["jpeg", "png"];

export default function FormOptions() {
    return (
        <section className="form-options">
            <h3>3. Options</h3>

            <p className="text-bold header-four">File Extensions</p>

            <div className="radio-container-filetype">
                <div className="radio-option">
                    <label htmlFor="jpeg">
                        <input type="radio" name="filetype" value="" id="jpeg" />
                        <span className="select-text">JPEG</span>
                    </label>
                </div>
                <div className="radio-option">
                    <label htmlFor="png">
                        <input type="radio" name="filetype" value="" id="png" />
                        <span className="select-text">PNG</span>
                    </label>
                </div>
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