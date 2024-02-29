import { ReactElement, MouseEvent } from 'react';

import BMC from "../../../public/assets/images/bmc.png";
import TwitterIcon from "../icons/TwitterSVG";
import FacebookIcon from "../icons/FacebookSVG";
import TumblrIcon from "../icons/TumblrSVG";
import CopyLinkIcon from "../icons/CopyLinkSVG";
import GithubIcon from "../icons/GithubSVG";

import "./Footer.scss";

function Footer(): ReactElement {

  function handleCopyLink(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) {
    e.preventDefault();

    const link = document.querySelector("#copy-link") as HTMLInputElement;
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
                    <a className="share-icon"
                        href="https://twitter.com/intent/tweet?text=Do you need to crop and divide your long webcomic pages? Super Comic Slicer will do the job for you! 💖  Also, features scaling down size. 🎉 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/"
                        target="_blank"
                        title="Share on Twitter"
                        rel="noopener"
                        >
                        <TwitterIcon
                          className="icon"
                          ColorFillClassName="color-highlight"
                        />
                    </a>
                    <a title="Share on Facebook"
                        className="share-icon"
                        href="https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/"
                        target="_blank"
                        rel="noopener"
                      >
                      <FacebookIcon
                        className="icon"
                        ColorFillClassName="color-highlight"
                      />
                    </a>
                    <a title="Share on Tumblr"
                        className="icon__wrapper share-icon"
                        href="http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/"
                        target="_blank"
                        rel="noopener"
                      >
                      <TumblrIcon
                        className="icon"
                        ColorFillClassName="color-highlight"
                      />
                    </a>
                    <a title="Copy Link"
                        href="#"
                        className="icon__wrapper share-icon"
                        onClick={(e) => handleCopyLink(e)}
                        rel="noopener"
                    >
                      <input type="text" defaultValue="https://supercomicslicer.netlify.app/" id="copy-link" />
                      <CopyLinkIcon
                        className="icon"
                        ColorFillClassName="color-highlight"
                      />
                    </a>
                </div>
            </div>

            <div className="contribute-container">
                <h3>Contribute</h3>
                <a
                    href="https://github.com/hyfydistro/super-comic-slicer/tree/dev"
                    target="_blank"
                    rel="noopener"
                >
                    <div className="contribute-icon-container">
                      <GithubIcon
                        className="icon"
                        ColorFillClassName="color-highlight"
                      />
                      <span className="contribute-text">super-comic-slicer</span>
                    </div>
                </a>

                <a
                  className="translation-link"
                  href="https://docs.google.com/spreadsheets/d/1HgGwzr13YISx56oih66LNoYBX6zEBpQkAjTMmKkit4E/edit?usp=sharing"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="contribute-text">
                    translations help
                  </span>
                </a>
            </div>
        </div>

        <div className="column-two">
            <div className="donate-container">
                <h3>Donate</h3>
                <a href="https://www.buymeacoffee.com/spectredox" className="donate-image__wrapper" rel="noopener">
                    <img className="donate-image" src={BMC} alt="Buy me a coffee" />
                </a>
            </div>

            <div className="contact-container">
                <h3>Contact</h3>

                <small>Send me an email and say "Hi"! Feedbacks are welcome. Any known issues found, let me know and I'll see what I can do. If there’s a feature you’d like me to add or more webcomic platforms I know none of, write me a mention. 😃</small>

                <a href="mailto:hyfydistro@gmail.com" className="email-link">hyfydistro@gmail.com</a>
            </div>
        </div>
    </div>

      <div className="footer-notes"><small className="text-small">Website developed by hyfydistro • <a href="https://twitter.com/Spectredox">Twitter</a> • <a href="https://www.instagram.com/spectredox/">Instagram</a> • <a href="https://github.com/hyfydistro">Github</a> • 2024 • <a href="https://github.com/hyfydistro/super-comic-slicer/blob/dev/LICENSE">License</a> • Version 2.0.0</small></div>
    </footer>
  );
}

export default Footer;