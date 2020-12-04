import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import ImgSlider from './components/ImgSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImgSlider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;