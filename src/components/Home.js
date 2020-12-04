import React from 'react';
import Content from './Content';
import Footer from './Footer';
import ImgSlider from './ImgSlider';

const Home = () => {
    return (
    <div className="App">
        <ImgSlider />
        <Content />
        <Footer />
    </div>
    );
}
 
export default Home;