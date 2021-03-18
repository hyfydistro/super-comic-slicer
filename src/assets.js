// ======
// Files
// ======
import "./images/header-bg.png";
import "./images/salespitch.svg";
import "./images/remove-icon.svg";
import "./images/upload-icon.svg";
import "./images/error-icon.svg";
import "./images/warning-icon.svg";
import "./images/check-icon.svg";
import "./images/webtoon-icon.svg";
import "./images/tapas-icon.png";
import "./images/bmc-btn.png";
// Favicon
import favicon from "./favicon.ico";
import "./images/favicon-32x32.png";
// Webmanifest file
import "./site.webmanifest";

// ==========
// HEADER TAG
// ==========
// - link element
// Append 'favicon' to head link tag
const faviconElement = document.querySelector("link[href='favicon.ico']");
faviconElement.href = favicon;