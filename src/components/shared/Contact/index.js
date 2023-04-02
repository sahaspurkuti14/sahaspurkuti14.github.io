import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "../../elements/Toast/showToast";
import Button from "../../../ui/Button";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
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
  };

  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>

    <div className="contact-form section" id="contact">
      <h2>Contact</h2>
      <div className="contact-section">
        <div className="contact-info">
          <h3 className="gradient-text mb-10">Will Love to hear from you</h3>
          <a href="mailto:sahaspurkuti14@gmail.com" className="contact-item">
            <FiMail />
            <span>sahaspurkuti14@gmail.com</span>
          </a>
          <a href="tel:+9779808078579" className="contact-item">
            <BsFillTelephoneFill /> <span>+977 9808078579</span>
          </a>
          <div className="contact-item">
            <GoLocation /> <span>Kathmandu, Nepal</span>
          </div>
          <div className="social-links">
            <a
              href="https://www.facebook.com/sahaspurkuti14"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/sahaspurkuti14/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/sahaspurkuti14"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.instagram.com/sahaspurkuti14/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
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
              }}
              name="user_name"
              required
            />
          </div>
          <div className="form-element">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="user_email"
            />
          </div>
          <div className="form-element">
            <label>Message *</label>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <Button title={"Send"} onClick={sendEmail} isSubmitting={loading} />
        </form>
      </div>
    </div>
    </AnimationOnScroll>

  );
}
