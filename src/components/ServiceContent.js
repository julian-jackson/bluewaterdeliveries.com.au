import React from "react";
import "./content.css";
import PhoneIcon from "./../img/phone-call.svg";
import Pool1 from "./../img/pool1.jpg";
import WaterTank from "./../img/water_tank.jpg";

const Content = () => {
  const about_bluewater = (
    <div class="bubble">
      <h1>Our Services</h1>
      <p>
        Hi!<br></br>
        <br></br>
        Here at bluewater deliveries we have been servicing the communities in
        and around Noosa for over 20 years making sure all of our clients have
        the peace of mind knowing they will have excess to a continued and
        secure safe supply of drinking water for there tanks and swimming pools.
        This is an essential service that here at bluewater deliveries take very
        seriously, both hygienically and efficiently knowing your local council
        or Unitywater cannot and do not have the Infrastructure in place to
        supply and service a large part or in fact most of the hinterland where
        my clients choose to live. <br></br>
        <br></br>
        Here at bluewater deliveries for over past 20 + years we have been
        setting the standard to supply you and your families with safe and a
        very efficient service and we continue to do so, We also have put
        together and built one of the largest capacity trucks on the Sunshine
        Coast, carrying and delivering 15,000 litres in the one delivery This
        also allows us to fill your new swimming pool quicker and most of all
        cheaper than other water carriers. <br></br> <br></br>
        This is how ..... <br></br>
        1x15,000 litres =$250 <br></br>
        2=30,000 litres $500<br></br>
        3=45,000 litres $750 <br></br>
        4=60,000 litres $1,000...<br></br><br></br>
        Be sure for your next water tank fill ... Or to fill your new or
        renovated swimming pool.<br></br>
        Call Bluewater deliveries.<br></br>
         Where we don’t just
        run the most cost effective water deliveries ... we set the standard!!!<br></br>
        0409113775 to leave a message..or simply order online
      </p>
    </div>
  );

  return <main className="content">{about_bluewater}</main>;
};
export default Content;
