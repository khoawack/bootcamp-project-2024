import React from 'react';
import style from './contact.module.css'; 

const ContactPage: React.FC = () => {
  return (
    <main className={style.main}>
      <h1 className={style.pageTitle}>Contact</h1>
      <form id="contact-form" className={style.contactForm}>
        <label htmlFor="name" className={style.formLabel}>Name</label>
        <input type="text" id="name" className={style.formInput} />

        <label htmlFor="email" className={style.formLabel}>Email</label>
        <input type="email" id="email" className={style.formInput} />

        <label htmlFor="message" className={style.formLabel}>Message</label>
        <textarea id="message" className={style.formTextarea}></textarea>

        <input type="submit" className={style.formSubmit} value="Submit" />
      </form>
    </main>
  );
};

export default ContactPage;
