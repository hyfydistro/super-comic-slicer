import { ReactElement } from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UseTool from './pages/UseTool/UseTool';
import About from './pages/About/About';


function App(): ReactElement {
  return (
    <>
      <Header />
        {/* content herer */}
        <Routes>
          <Route path="/" element={<UseTool/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;