import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';

// ==========
// COMPONENTS
// ==========
import Header from "./scripts/components/Header.js";
import Intro from "./scripts/components/Intro.js";
import Form from "./scripts/components/Form.js";
const Contact = React.lazy(() => import("./scripts/components/Contact.js"));
const Footer = React.lazy(() => import("./scripts/components/Footer.js"));
// import Contact from "./scripts/components/Contact.js";
// import Footer from "./scripts/components/Footer.js";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Intro />
                <Form />
                <Suspense fallback={<div><p>Loading...</p></div>}>
                    <Contact />
                    <Footer />
                </Suspense>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)