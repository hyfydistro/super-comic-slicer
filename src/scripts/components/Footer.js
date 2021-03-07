import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="column-wrapper">
                <div className="column-one">
                    <div className="share-container">
                        <h3>Share</h3>
                        <div className="share-icon-container">
                            <span className="share-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-twitter fa-stack-1x"></i>
                            </span>
                            <span className="share-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x"></i>
                            </span>
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
                                <span className="contribute-text">@hyfydistro</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="column-two">
                    <div className="donate-container">
                        <h3>Donate</h3>
                        <a href="https://www.buymeacoffee.com/spectredox" className="donate-image__wrapper">
                            <img className="donate-image" src="images/bmc-btn.png" alt="Buy me a coffee"/>
                        </a>

                    </div>
                </div>
            </div>

            <div className="footer-notes"><p className="text-small">Website developed by Caroline Rozali • <a href="">Twitter</a> • <a href="">Instagram</a> • 2021 • <a href="">License</a> • Version 1.0</p></div>
        </footer>
    )
}