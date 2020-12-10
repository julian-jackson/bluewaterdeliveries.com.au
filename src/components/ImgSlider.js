import React, { useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Truck1 from "./../img/truck2.jpg";
import Truck2 from "./../img/truck3.jpg";
import Truck3 from "./../img/truck1.jpg";
import "./imgslider.css";

const ImgSlider = () => {
  const data = (
    <div class="slider-container mobile-hide">
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-button" id="radio1"></input>
          <input type="radio" name="radio-button" id="radio2"></input>
          <input type="radio" name="radio-button" id="radio3"></input>

          <div class="slide first">
            <img src={Truck1} alt="Truck 1"></img>
          </div>

          <div class="slide">
            <img src={Truck2} alt="Truck 2"></img>
          </div>

          <div class="slide">
            <img src={Truck3} alt="Truck 3"></img>
          </div>

          <div class="navigation-auto">
            <div class="auto-button1"></div>
            <div class="auto-button2"></div>
            <div class="auto-button3"></div>
          </div>
        </div>
        <div class="navigation-manual">
          <label for="radio1" class="manual-button"></label>
          <label for="radio2" class="manual-button"></label>
          <label for="radio3" class="manual-button"></label>
        </div>
      </div>
    </div>
  );

  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);

  return <main className="content">{data}</main>;
};

export default ImgSlider;
