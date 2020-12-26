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
                        <p class="page-header">Contact Us</p>
                        <form onSubmit={sendEmail}>
            
                            <label>Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />

                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Your subject" />

                            <label>Message</label>
                            <textarea id="message" name="message" placeholder="Enter your message"></textarea>

                            <input type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}