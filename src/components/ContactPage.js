import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactPage.css";

const jokeList = [
  "Why did the developer go broke? Because he used up all his cache.",
  "Why do I drink coffee? It allows me to do stupid things faster and with more energy.",
  "A conference call is the best way to get a dozen people to say bye 300 times.",
  "How does NASA organize a party? They planet.",
  "You know what they say about a clean desk. It’s a sign of a cluttered drawer.",
  "What did one ocean say to the other? Nothing, they just waved.",
  "Why did the can crusher quit his job? Because it was soda pressing.",
  "Whoever stole my Microsoft Office — I will find you. You have my Word!",
  "What did the full glass say to the empty one? You look drunk.",
  "Who wins between Sunday & Monday? Sunday. Monday is a weekday.",
];

const ContactPage = () => {
  const [joke] = useState(
    jokeList[Math.floor(Math.random() * jokeList.length)]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "855afd4a-9db1-49bb-85ba-ad38ae1f1996"); // Your Web3Forms key
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Message failed to send!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer />

      <div className="contact-header">Contact</div>

      <div className="contact-info">
        <div className="contact-left">
          <span>{joke}</span> 😁
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={onFormSubmit}>
            {/* Name + Email */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Phone + Address */}
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="contact-form-message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="contact-form-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
