import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App(): React.ReactElement {
  return (
    <>
      <Header />
        {/* content herer */}
        <h1>header 1</h1>
        <h2>wow</h2>
        <h3>nothing</h3>
    <p>hello</p>
    <p>ok</p>

      <Footer />
    </>
  );
}

export default App;