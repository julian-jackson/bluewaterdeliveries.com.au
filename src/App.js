import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./components/Home";
import Services from "./components/Services";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/ContactForm";
import Order from "./components/Order"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Services" component={Services} />
            <Route path="/ServiceArea" component={ServiceArea} />
            <Route path="/Order" component={Order} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
