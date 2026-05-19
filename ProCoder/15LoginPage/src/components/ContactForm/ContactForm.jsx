import React, { useState } from "react";

import { MdMessage, MdCall, MdMarkEmailUnread } from "react-icons/md";

import styles from "./ContactForm.module.css";
import Button from "../Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("ConnectoShivam");
  const [email, setEmail] = useState("connecto@momsnanhi.com");
  const [text, setText] = useState("radhe radhe");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    

  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icons={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icons={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icons={<MdMarkEmailUnread fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="7"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT"></Button>
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
