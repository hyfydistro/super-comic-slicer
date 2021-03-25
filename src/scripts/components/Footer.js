// TODO
// Social Media Considerations
// (WIP)

export default function Footer() {

    function handleCopyLink(e) {
        e.preventDefault();

        const link = document.querySelector("#copy-link");
        link.select();
        link.setSelectionRange(0, 99999);
        document.execCommand("copy");

        alert("Copied the text: " + link.value);
    }

    return (
        <footer>
            <div className="column-wrapper">
                <div className="column-one">
                    <div className="share-container">
                        <h3>Share</h3>
                        <div className="share-icon-container">
                            <a className="icon__wrapper share-icon"
                                href="https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/"
                                target="_blank"
                                title="Share on Twitter"
                                rel="noopener"
                                >
                                <span className="icon__block">
                                    <i className="icon icon-twitter"></i>
                                </span>
                            </a>
                            <a title="Share on Facebook"
                                className="icon__wrapper share-icon"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/"
                                target="_blank"
                                rel="noopener"
                                >
                                <span className="icon__block">
                                    <i className="icon icon-facebook"></i>
                                </span>
                            </a>
                            <a title="Share on Tumblr"
                                className="icon__wrapper share-icon"
                                href="http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/"
                                target="_blank"
                                rel="noopener"
                            >
                                <span className="icon__block">
                                    <i className="icon icon-tumblr"></i>
                                </span>
                            </a>
                            <a title="Copy Link"
                                href="#"
                                className="icon__wrapper share-icon"
                                onClick={(e) => handleCopyLink(e)}
                                rel="noopener"
                            >
                                <span className="icon__block">
                                    <i className="icon icon-link"></i>
                                    <input type="text" defaultValue="https://supercomicslicer.netlify.app/" id="copy-link" />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="contribute-container">
                        <h3>Contribute</h3>
                        <a
                            href="https://github.com/hyfydistro/super-comic-slicer"
                            target="_blank"
                            rel="noopener"
                        >
                            <div className="contribute-icon-container">
                                <span className="contribute-icon icon__wrapper">
                                    <i className="icon icon-github"></i>
                                </span>
                                <span className="contribute-text">super-comic-slicer</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="column-two">
                    <div className="donate-container">
                        <h3>Donate</h3>
                        <a href="https://www.buymeacoffee.com/spectredox" className="donate-image__wrapper" rel="noopener">
                            <img className="donate-image" src="images/bmc-btn.png" alt="Buy me a coffee" />
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer-notes"><p className="text-small">Website developed by Caroline Rozali • <a href="https://twitter.com/Spectredox" rel="noopener">Twitter</a> • <a href="https://www.instagram.com/spectredox/" rel="noopener">Instagram</a> • <a href="https://github.com/hyfydistro" rel="noopener">Github</a> • 2021 • <a href="https://github.com/hyfydistro/super-comic-slicer/blob/main/LICENSE" rel="noopener">License</a> • Version 1.0.5</p></div>
        </footer>
    )
}