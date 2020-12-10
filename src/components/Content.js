import React from "react";
import "./content.css";
import PhoneIcon from "./../img/phone-call.svg";
import Pool1 from "./../img/pool1.jpg";
import WaterTank from "./../img/water_tank.jpg";

import Truck1 from "./../img/truck2.jpg";
import Truck2 from "./../img/truck3.jpg";

const Content = () => {
  const about_bluewater = (
    <div>
      <div class="bubble">
        <img class="sub-image mobile-only" src={Truck1}></img>
        <h1>At Bluewater...</h1>
        <p>
          Here at Bluewater Deliveries we specialise in only the{" "}
          <span class="bold">highest quality</span> and{" "}
          <span class="bold">cleanest</span> drinking water available. We only use{" "}
          <span class="bold">food grade stainless steel</span> teel tankers and
          food grade hoses to deliver your water into your tanks as hygenically as
          possible.
        </p>
        <p>
          We also specialise in filling your new swimming pool. With our larger
          carrying capacity we can fill your pool quicker and more economically.
          Just contact us by phone or email for a quote.
        </p>
      </div>
    </div>
  );

  const about_bluewater_expanded = (
    <div class="bubble">

        <h1>A Bit About Us...</h1>
        <p>
        Hi!<br></br><br></br> 
        
        Here at bluewater deliveries we have been servicing the
        communities in and around Noosa for over 20 years making sure all of our
        clients have the peace of mind knowing they will have excess to a
        continued and secure safe supply of drinking water for there tanks and
        swimming pools. This is an essential service that here at bluewater
        deliveries take very seriously, both hygienically and efficiently
        knowing your local council or Unitywater cannot and do not have the
        Infrastructure in place to supply and service a large part or in fact
        most of the hinterland where my clients choose to live. <br></br><br></br> 
        
        Here at
        bluewater deliveries for over past 20 + years we have been setting the
        standard to supply you and your families with safe and a very efficient
        service and we continue to do so, We also have put together and built
        one of the largest capacity trucks on the Sunshine Coast, carrying and
        delivering 15,000 litres in the one delivery This also allows us to fill
        your new swimming pool quicker and most of all cheaper than other water
        carriers. <br></br> <br></br> 
        
        This is how ..... <br></br>
        1x15,000 litres =$250 <br></br>
        2=30,000 litres $500<br></br>
        3=45,000 litres $750 <br></br>
        4=60,000 litres $1,000...<br></br>
      </p>
        <div class="centered-flex">
            <img class="sub-image" src={Pool1}></img>
            <img class="sub-image" src={WaterTank}></img>
            <img class="sub-image mobile-only" src={Truck2}></img>
        </div>
        
    </div>
  );



  return (
    <main className="content">
      {about_bluewater}
      {about_bluewater_expanded}
    </main>
  );
};
export default Content;
