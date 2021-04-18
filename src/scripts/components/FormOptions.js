// RADIO OPTIONS
// Default CHECKED: squashLevelModel[0]
const squashLevelModel = [
    {
        htmlLabel: "none",
        pixelValue: 0,
        text: "none"
    },
    {
        htmlLabel: "400",
        pixelValue: 400,
        text: "400 width pixels"
    },
    {
        htmlLabel: "500",
        pixelValue: 500,
        text: "500 width pixels"
    },
    {
        htmlLabel: "600",
        pixelValue: 600,
        text: "600 width pixels"
    },
    {
        htmlLabel: "700",
        pixelValue: 700,
        text: "700 width pixels"
    }
]

// RADIO OPTIONS
// Default CHECKED: filExtensionsModel[0]
const filExtensionsModel = [
    {
        htmlLabel: "jpeg",
        text: "JPEG"
    },
    {
        htmlLabel: "png",
        text: "PNG"
    }
];


function SquashOptions(props) {

    const squashLevelList = squashLevelModel.map((currentSquashLevel, index) => {

        if (squashLevelModel[0] == currentSquashLevel) {
            return (
                <div className="radio-option" key={index}>
                    <label htmlFor={currentSquashLevel.htmlLabel}>
                        <input
                            defaultChecked
                            type="radio"
                            name="squash"
                            value={currentSquashLevel.pixelValue}
                            id={currentSquashLevel.htmlLabel}
                            onClick={(e) => props.onHandleOptionsSquashLevel(e)}
                        />
                        <span className="select-text">{currentSquashLevel.text}</span>
                    </label>
                </div>
            )
        } else {
            return (
                <div className="radio-option" key={index}>
                    <label htmlFor={currentSquashLevel.htmlLabel}>
                        <input
                            type="radio"
                            name="squash"
                            value={currentSquashLevel.pixelValue}
                            id={currentSquashLevel.htmlLabel}
                            onClick={(e) => props.onHandleOptionsSquashLevel(e)}
                        />
                        <span className="select-text">{currentSquashLevel.text}</span>
                    </label>
                </div>
            )
        }
    });

    return squashLevelList;
}

function FileExtensionOptions(props) {

    const fileExtensionsList = filExtensionsModel.map((fileExtObj, index) => {
        if (filExtensionsModel[0] === fileExtObj) {
            return (
                <div className="radio-option" key={index}>
                    <label htmlFor={fileExtObj.htmlLabel}>
                        <input
                            defaultChecked
                            type="radio"
                            name="filetype"
                            value={fileExtObj.htmlLabel}
                            id={fileExtObj.htmlLabel}
                            onClick={(e) => props.onHandleOptionsFileExtenions(e)}
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
                            onClick={(e) => props.onHandleOptionsFileExtenions(e)}
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

            <p className="form-header">File Extensions</p>

            <div className="radio-container-filetype">
                <FileExtensionOptions
                    onHandleOptionsFileExtenions={props.onHandleOptionsFileExtenions}
                />
            </div>


            <p className="form-header">Squash</p>

            <p className="margin-fix">Squash scale down image file size.</p>

            <ul className="margin-fix">
                <li>If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.</li>
                <li>if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.</li>
            </ul>

            <div className="radio-container-squash">
                <SquashOptions
                    onHandleOptionsSquashLevel={props.onHandleOptionsSquashLevel}
                />
            </div>
        </section>
    )
}