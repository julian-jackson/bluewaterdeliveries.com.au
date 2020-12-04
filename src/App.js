import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import ImgSlider from './components/ImgSlider';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './components/Home';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Services" component={Services}/>
             <Route path="/Contact" component={Contact}/>
             <Route path="/ServiceArea" component={ServiceArea}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 

export default App;