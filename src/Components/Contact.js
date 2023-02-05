import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="https://formsubmit.co/f9929c2920c340b1b4aa0708aa9d6aeb" method="POST">
          <div>
            <label>Name</label>
            <input name="_honey" type="text" required placeholder="Abc" />
            <input type="hidden" name="_captcha" value="false"></input>
          </div>

          <div>
            <label>Email</label>
            <input name="Email" type="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;