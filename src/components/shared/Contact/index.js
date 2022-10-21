import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { showToast } from "../../elements/Toast/showToast";
import Button from "../../../ui/Button";

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
    setLoading(true);
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
      setErrorName("Invalid Email!");
    }
    if (!message) {
      isValid = false;
      setErrorMessage("This field is required!");
    }

    setTimeout(() => {
      if (isValid) {
        // emailjs
        //   .sendForm(
        //     process.env.REACT_APP_EMAIL_SERVICE_ID,
        //     process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        //     form.current,
        //     process.env.REACT_APP_EMAIL_PUBLIC_KEY
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result, "result");
        //       showToast({
        //         varient: "success",
        //         message: "Email sent successfully",
        //       });
        //     },
        //     (error) => {
        //       console.log(error);
        //       alert("failed to send message");
        //       showToast({
        //         varient: "error",
        //         message: "Failed to send email!",
        //       });
        //     }
        //   );
      }
    }, 1000);
    setLoading(false);
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact</h2>
        <div className="form-element">
          <label>Name *</label>
          <input type="text" value={name} name="user_name" />
          {errorName && <span className="error">{errorName}</span>}
        </div>
        <div className="form-element">
          <label>Email *</label>
          <input type="email" value={email} name="user_email" />
          {errorEmail && <span className="error">{errorEmail}</span>}
        </div>
        <div className="form-element">
          <label>Message *</label>
          <textarea name="message" value={message} />
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
        <div className="d-flex justify-content-center">
          <Button title={"Send"} onClick={sendEmail} />
        </div>
      </form>
    </div>
  );
}
