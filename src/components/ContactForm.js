import React from "react";
import "./form.css";

const Content = () => {
    const form = (
        <div class="bubble">
            <div class="form-container centered-flex">
                
                <div>
                <p class="page-header">Contact Me (Currently Unavaliable)</p>
                <form action="/contactForm.php">
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name" />
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name" />


                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" />


                <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Enter your message"></textarea>
                <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        </div>
    );
    return (
        <main className="content">
            {form}
        </main>
    );
};

export default Content

