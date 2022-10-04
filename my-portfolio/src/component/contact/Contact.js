import React, { useState } from "react";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";
import helloImage from "../../multimedia/images/undraw_hello_re_3evm.svg";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src={helloImage} alt="" />
        <h1>
          <span>Reach out to me</span>
          <span>I'll be glad to see you in my mails.</span>
        </h1>
      </div>
      <div className="form-container">
        <form
          className="form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="apikey"
            value="YOUR_API_KEY"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required={true}
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required={true}
            placeholder="Your email-id"
          />
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required={true}
            placeholder="Your message or suggestion for me"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <button type="submit" title="send" onSubmit={submitForm}>
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
}
