import React from "react";
import "./form.css";

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
            <p>We service the enterity of the Sunshine Coast as seen in the map below.</p>

        </div>
    </div>
  );
  return <main className="content">{form}</main>;
};

export default Content;
