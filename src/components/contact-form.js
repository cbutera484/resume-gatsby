import React from "react";
import "../layouts/contact-form.css";

class ContactForm extends React.Component {
  render() {
    return (
      <form
        className="contact"
        name="contact-form"
        data-netlify="true"
        action="/form-success"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <div className="inputWrapper">
            <input type="text" id="name" name="user_name" required />
            <span className="focus-animation" />
          </div>
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <div className="inputWrapper">
            <input type="email" id="mail" name="user_mail" />
            <span className="focus-animation" />
          </div>
        </div>
        <div>
          <label htmlFor="msg">Message:</label>
          <div className="inputWrapper">
            <input type="text" id="msg" name="user_message" required />
            <span className="focus-animation" />
          </div>
        </div>

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ContactForm;
