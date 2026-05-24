import React, { useState } from 'react'

import styles from './ContactForm.module.css'
import Button from '../Button/Button'

import { RiMessage3Fill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";





const ContactForm = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);


    };



  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<RiMessage3Fill fontSize="25px"/>} />
            <Button text="VIA CALL" icon={<IoCallSharp  fontSize="25px"/>} />
          </div>
          <Button isOutline={true} text="VIA MAIL FORM" icon={<MdMarkEmailUnread fontSize="24px" />}/>

          <form onClick={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"  />
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Message</label>
                <textarea name="text" rows="7"></textarea>
            </div>
            <div style={{display: "flex",justifyContent: "end"}}>
                <Button text="SUBMIT"></Button>
            </div>

            <div>{name + " " + email + " " + text}</div>
          </form>
          
        </div>
        <div className={styles.contact_image}>
           <img src="/images/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm
