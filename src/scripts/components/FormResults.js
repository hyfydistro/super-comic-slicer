// TODO: FEATURE (NEXT UPDATE)
// adjust to webcomic platform ratio for display

function Product(props) {

    // INJECT image blob
    const processedImageFIles = props.getImageData.map((imgData, index) => {

        return (
            <div className="product__image-block" key={index}>
                <img src={imgData} />
            </div>
        )
    })

    return processedImageFIles;
}

export default function FormResults(props) {
    return (
        <section className="form-results">
            <h3>Results</h3>

            <p className="margin-fix" >For each webcomic platform selected, a zip file will be automatically downloaded after slicing process completed.</p>

            <canvas id="canvas"></canvas>

            <div className="product-container">
                <div className="product">
                    <Product
                        getImageData={props.getImageData}
                    />
                </div>
            </div>
        </section>
    )
}