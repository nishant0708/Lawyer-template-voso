import React from 'react'
import styles from '@/Components/Theme5.module.css';
import Contact from '@/Components/ContactUS/Contact';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Page = () => {
  return (
    <div className={styles.contactpage_maindiv}>
      <header className={styles.header}>
        <h3>Contact page</h3>
      </header>
      <div className={styles.contactpage_div}>
       <Contact/>
       <div className={styles.contactpage_div_details}>
        <p><IoCallOutline/> +2293049-30</p>
        <p><CiMail/> Vosovyapaar@gmail.com</p>
        <p><IoLocationOutline/> VijayNagar indore</p>
       </div>
      </div>

    </div>
  )
}

export default Page