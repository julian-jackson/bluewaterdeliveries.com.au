import React from "react";
import emailjs from "emailjs-com"
import "./form.css";

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k9s04e6', 'template_w7lt6in', e.target, 'user_gsAkzJBO0TuMoax59sHJH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <main className="content">
       <div class="bubble">
      <div class="form-container centered-flex">
        <div>
        <p class="page-header">Water Order (Currently Unavaliable)</p>
        <form action={sendEmail}>
          <label>Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
          <label>Telephone</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            placeholder="Your telephone"
          />
          <label>Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address"
          />
          <label>Order Size</label>
          <select>
            <option>7000L</option>
            <option>10000L</option>
            <option>15000L</option>
          </select>

          <label>Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            placeholder="Enter any additonal delivery instructions"
          ></textarea>

          <label>Call me to arrange delivery?</label>
          <input type="checkbox" id="to-call-check" name="to-call-check" />
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
          </form>
          </div>
      </div>
    </div>
    </main>
  )
}