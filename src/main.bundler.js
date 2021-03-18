// Variables
// ======
// React
// ======
import React from 'react';
import ReactDOM from 'react-dom';

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
import "./images/android-chrome-192x192.png";
import "./images/android-chrome-512x512.png";
// Webmanifest file
import "./site.webmanifest";

// ======
// Styles
// ======
import "./main.styles.scss";

// ====================
// Scripts & Components
// ====================
// components
import Header from "./scripts/components/Header.js";
import Intro from "./scripts/components/Intro.js";
import Form from "./scripts/components/Form.js";
import Contact from "./scripts/components/Contact.js";
import Footer from "./scripts/components/Footer.js";
// libs
import createId from './scripts/libs/createId.js';
import convertBytes from './scripts/libs/convertBytes.js';
// scripts
// n/a

// ==========
// HEADER TAG
// ==========
// - link element
// Append 'favicon' to head link tag
const faviconElement = document.querySelector("link[href='favicon.ico']");
faviconElement.href = favicon;

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Intro />
                <Form />
                <Contact />
                <Footer />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)