import React from 'react'
import style from "@/Components/Theme5.module.css"

const Contact = ({data}) => {
  return (
    <div className={style.git}>
    
       <div className={style.gitcontainer}>
        <div className={style.gitimgcontainer}>
       
            <img src="/Assets/laywer4.png"  classname={style.gitimg2} alt="" />
        </div>
        <div className={style.gitformcontainer}>
           <p>Get In Touch</p>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <input type='tel'  placeholder='Mobile No.'/>
            <textarea placeholder='Enter Your Message'></textarea>
            <button>Submit</button>
        </div>
       </div>
    </div>
  )
}

export default Contact