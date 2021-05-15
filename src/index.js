import React, { Suspense, lazy }  from "react";
import * as ReactDOM from "react-dom";

// ==========
// COMPONENTS
// ==========
import Header from "./scripts/components/Header.js";
// import Intro from "./scripts/components/Intro.js";
const Intro = lazy(() => import("./scripts/components/Intro.js"));
// import Form from "./scripts/components/Form.js";
const Form = lazy(() => import("./scripts/components/Form.js"));
// import Contact from "./scripts/components/Contact.js";
const Contact = lazy(() => import(/* webpackPrefetch: true */"./scripts/components/Contact.js"));
// import Footer from "./scripts/components/Footer.js";
const Footer = lazy(() => import( /* webpackPrefetch: true */"./scripts/components/Footer.js"));

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Suspense fallback={<div><p>LOADING...</p></div>}>
                    <Intro />
                </Suspense>
                <Suspense fallback={<div><p>LOADING...</p></div>}>
                    <Form />
                </Suspense>
                <Suspense fallback={<div><p>LOADING...</p></div>}>
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