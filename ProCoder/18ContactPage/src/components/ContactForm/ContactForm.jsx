import React, { useState } from 'react'

import { RiMessageFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";



import styles from './ContactForm.module.css'
import Button from '../Button/Button'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {

    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button icons={<RiMessageFill fontSize="24px" />} text="VIA SUPPORT CHAT" />
                <Button icons={<IoCallSharp fontSize="24px"/>} text="VIA CALL"/>
            </div>
            <Button isOutline={true} icons={<MdMarkEmailRead fontSize="25px"/>} text="VIA EMAIL FORM"/>

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Message</label>
                    <textarea name="text" rows="7"></textarea>
                </div>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <Button text="SUBMIT"/>
                </div>

                <div>{name+ " " + email +" "+text}</div>
            </form>


        </div>
        <div className="contact_image">
            <img src="/images/contact.svg" alt="banner of call" />
        </div>
    </section>
  )
}

export default ContactForm
