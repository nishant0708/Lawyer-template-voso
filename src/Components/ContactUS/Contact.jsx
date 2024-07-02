import React from 'react'
import styles from "@/Components/Theme5.module.css"

const Contact = ({data}) => {
  return (
    <div className={styles.appointment_form_main}>
    <div className={styles['appointment-form']}>
      <h1 className={styles['appointment-form__title']}>
        Let's Make An Appointment With Us First
      </h1>
      <form className={styles['appointment-form__form']}>
        <div className={styles.appointment_namephone}>
        <div className={styles['appointment-form__group appointment_name_div']}>
          <label className={styles['appointment-form__label']} htmlFor="name">Your Name*</label>
          <input className={styles['appointment-form__input']} type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className={styles['appointment-form__group appointment_phone_div']}>
          <label className={styles['appointment-form__label']} htmlFor="phone">Your Phone*</label>
          <input className={styles['appointment-form__input']} type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>
        </div>
        <div className={styles['appointment-form__group']}>
          <label className={styles['appointment-form__label']} htmlFor="email">Your Email*</label>
          <input className={styles['appointment-form__input']} type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div className={styles['appointment-form__group']}>
          <label className={styles['appointment-form__label']} htmlFor="message">Message (optional)</label>
          <textarea className={styles['appointment-form__textarea']} id="message" name="message" placeholder="Enter message"></textarea>
        </div>
        <button className={styles['appointment-form__button']} type="submit">Make Appointment</button>
      </form>
    </div>
    </div>
  )
}

export default Contact