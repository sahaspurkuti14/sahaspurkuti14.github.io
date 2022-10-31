import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "../../elements/Toast/showToast";
import Button from "../../../ui/Button";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill , BsFacebook, BsLinkedin , BsGithub, BsInstagram} from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!name) {
      isValid = false;
      setErrorName("This field is required!");
    }
    if (!email) {
      isValid = false;
      setErrorEmail("This field is required!");
    }
    if (
      !email.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      isValid = false;
      setErrorEmail("Invalid Email!");
    }
    if (!message) {
      isValid = false;
      setErrorMessage("This field is required!");
    }

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
          )
          .then(
            (result) => {
              setEmail("");
              setMessage("");
              setName("");
              showToast({
                varient: "success",
                message: "Email sent successfully",
              });
            },
            (error) => {
              console.log(error);
              alert("failed to send message");
              showToast({
                varient: "error",
                message: "Failed to send email!",
              });
            }
          );
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="contact-form" id="contact">
      <h2>Contact</h2>
      <div className="contact-section">
        <div className="contact-info">
          <h3 className="gradient-text mb-10">Will Love to hear from you</h3>
          <div>
            <FiMail />
            <span>sahaspurkuti14@gmail.com</span>
          </div>
          <div>
            <BsFillTelephoneFill /> <span>+977 9808078579</span>
          </div>
          <div>
            <GoLocation /> <span>Kathmandu, Nepal</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/sahaspurkuti14" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://www.linkedin.com/in/sahaspurkuti14/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/sahaspurkuti14" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.instagram.com/sahaspurkuti14/" target="_blank" rel="noreferrer"><BsInstagram/></a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <h3 className="gradient-text mb-10">Get in touch!</h3>
          <div className="form-element">
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorName("");
              }}
              name="user_name"
              style={{ border: errorName && "1px solid red" }}
            />
            {errorName && <span className="error">{errorName}</span>}
          </div>
          <div className="form-element">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorEmail("");
              }}
              style={{ border: errorEmail && "1px solid red" }}
              name="user_email"
            />
            {errorEmail && <span className="error">{errorEmail}</span>}
          </div>
          <div className="form-element">
            <label>Message *</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrorMessage("");
              }}
              style={{ border: errorMessage && "1px solid red" }}
            />
            {errorMessage && <span className="error">{errorMessage}</span>}
          </div>
          <Button title={"Send"} onClick={sendEmail} isSubmitting={loading} />
        </form>
      </div>
    </div>
  );
}
