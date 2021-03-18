// Variables
// ======
// React
// ======
import * as React from 'react';
import * as ReactDOM from 'react-dom';

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