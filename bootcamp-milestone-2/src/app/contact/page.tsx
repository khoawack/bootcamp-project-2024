"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import style from "./contact.module.css";

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formState;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setStatus("Sending...");

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        {
          name,
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID || ""
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormState({ name: "", email: "", message: "" }); // Reset the form
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className={style.main}>
      <h1 className={style.pageTitle}>Contact</h1>
      <form id="contact-form" className={style.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name" className={style.formLabel}>Name</label>
        <input
          type="text"
          id="name"
          className={style.formInput}
          value={formState.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email" className={style.formLabel}>Email</label>
        <input
          type="email"
          id="email"
          className={style.formInput}
          value={formState.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message" className={style.formLabel}>Message</label>
        <textarea
          id="message"
          className={style.formTextarea}
          value={formState.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <input type="submit" className={style.formSubmit} value="Submit" />
      </form>
      {status && <p className={style.statusMessage}>{status}</p>}
    </main>
  );
};

export default ContactPage;
