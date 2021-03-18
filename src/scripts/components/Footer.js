// TODO
// DEPLOY to netlify host
// ADD &url=

// Social Media Considerations
// (WIP)

export default function Footer() {

    function handleCopyLink(e) {
        e.preventDefault();

        const link = document.querySelector("#copy-link");
        link.select();
        link.setSelectionRange(0,99999);
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
                            <a class="twitter-share-button"
                                href="https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/"
                                target="_blank"
                                title="Share on Twitter">
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a title="Share on Facebook"
                                // href="http://www.facebook.com/sharer.php?s=100&p[title]=Super Comic Slicer&p[summary]=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by Spectredox&p[url]=YOUR_URL&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
                                // ! ADD link to end 'ul='
                                // href="https://www.facebook.com/sharer/sharer.php?u=https://tapas.io/"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/"
                                target="_blank">
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x"></i>
                                </span>
                            </a>
                            <a title="Share on Tumblr"
                                href="http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/"
                                target="_blank"
                            >
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-tumblr fa-stack-1x"></i>
                                </span>
                            </a>
                            <a title="Copy Link"
                                href="#"
                                onClick={(e) => handleCopyLink(e)}
                            >
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-link fa-stack-1x"></i>
                                    <input type="text" defaultValue="Hello World" id="copy-link" />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="contribute-container">
                        <h3>Contribute</h3>
                        <a href="https://github.com/hyfydistro/super-comic-slicer" target="_blank" rel="noopener noreferrer">
                            <div className="contribute-icon-container">
                                <span className="contribute-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-2x"></i>
                                </span>
                                <span className="contribute-text">super-comic-slicer</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="column-two">
                    <div className="donate-container">
                        <h3>Donate</h3>
                        <a href="https://www.buymeacoffee.com/spectredox" className="donate-image__wrapper">
                            <img className="donate-image" src="images/bmc-btn.png" alt="Buy me a coffee" />
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer-notes"><p className="text-small">Website developed by Caroline Rozali • <a href="https://twitter.com/Spectredox">Twitter</a> • <a href="https://www.instagram.com/spectredox/">Instagram</a> • <a href="https://github.com/hyfydistro">Github</a> • 2021 • <a href="https://github.com/hyfydistro/super-comic-slicer/blob/main/LICENSE">License</a> • Version 1.0</p></div>
        </footer>
    )
}