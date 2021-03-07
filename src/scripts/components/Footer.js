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
                        <div className="contribute-icon-container">
                            <span className="contribute-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-github fa-stack-2x"></i>
                            </span>
                            <span className="contribute-text">@hyfydistro</span>
                        </div>
                    </div>
                </div>

                <div className="column-two">
                    <div className="donate-container">
                        <h3>Donate</h3>
                        <div className="donate-icon-container">
                            <span className="donate-icon-stack fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-paypal fa-stack-1x"></i>
                            </span>
                            <span className="donate-text">Paypal</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-notes"><p className="text-small">Website developed by Caroline Rozali • <a href="">Twitter</a> • <a href="">Instagram</a> • 2021 • <a href="">License</a> • Version 1.0</p></div>
        </footer>
    )
}