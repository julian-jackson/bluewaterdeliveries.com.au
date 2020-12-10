import React from "react";
import "./serviceareamain.css";
import SunshineMap from "./../img/map.png";

// Required Info:

// Name
// Email
// Telephone
// Address and Postcode
// Order Size 7000, 10000, 15000
// Instructios
// Call me to arrange delivery (Tick box)

const Content = () => {
  const form = (
    <div class="bubble">
        <div>
            <h1>Service Area</h1>
            <p>We service the enterity of the Sunshine Coast as seen in the map below:</p>
            <div class="centered-flex">
              <img class="main-image mobile-mode" src={SunshineMap}></img>
            </div>

        </div>
    </div>
  );
  return <main className="content">{form}</main>;
};

export default Content;
