import React from 'react'

// TODO
// DEPLOY to netlify host
// ADD &url=

// Social Media Considerations
// Pinterest
{/* <a target="_new" href="http://pinterest.com/pin/create/button/?url={Permalink}&media={PhotoURL-500}"><img style="border: 0pt none;" src="same as above" width="45" height="45" /></a> */}
// Google
{/* <a target="_new" href="https://plus.google.com/share?url={Permalink}"><img style="border: 0pt none;" src="same as above" width="45" height="45" /></a> */}

export default function Footer() {
    return (
        <footer>
            <div className="column-wrapper">
                <div className="column-one">
                    <div className="share-container">
                        <h3>Share</h3>
                        <div className="share-icon-container">
                            <a class="twitter-share-button"
                                href="https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler"
                                target="_blank">
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a title="send to Facebook"
                                // href="http://www.facebook.com/sharer.php?s=100&p[title]=Super Comic Slicer&p[summary]=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by Spectredox&p[url]=YOUR_URL&p[images][0]=YOUR_IMAGE_TO_SHARE_OBJECT"
                                // ! ADD link to end 'ul='
                                href="https://www.facebook.com/sharer/sharer.php?u="
                                target="_blank">
                                {/* <a target="_new" href="https://www.facebook.com/sharer.php?u={Permalink}{block:Title}&t={Title}{/block:Title}"></a> */}
                                <span className="share-icon-stack fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x"></i>
                                </span>
                            </a>
                            <span className="share-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-tumblr fa-stack-1x"></i>
                            </span>
                            <span className="share-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-link fa-stack-1x"></i>
                            </span>
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

            <div className="footer-notes"><p className="text-small">Website developed by Caroline Rozali • <a href="">Twitter</a> • <a href="">Instagram</a> • <a href="">Github</a> • 2021 • <a href="">License</a> • Version 1.0</p></div>
        </footer>
    )
}