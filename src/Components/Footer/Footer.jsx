import Image from 'next/image'
import React from 'react'
import style from "@/Components/Theme5.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      {/* <div className={style.footer_imgcontainer}>
        <Image 
          src="/stars-background.jpg" 
          alt="Stars Background" 
          layout="fill" 
          objectFit="cover"
          className={style.background_img} 
        />
      </div> */}
      <div className={style.overlay}></div>
      <div className={style.content}>
        <div className={style.contact}>
          <div className={style.contact_item}>
            <h4>EMAIL US</h4>
            <p>support@yourdomain.tld</p>
          </div>
          <div className={style.contact_item}>
            <h4>CALL US</h4>
            <p>+6221.2002.2012</p>
          </div>
          <div className={style.contact_item}>
            <h4>FOLLOW OUR SOCIAL</h4>
            <div className={style.navbar_icons}>
            <span><FaFacebookF size={14}/></span>
            <span> <FaInstagram size={14}/></span>
            <span> <FaTwitter size={14}/></span>
            <span><FaYoutube size={14}/></span>
          </div>
          </div>
        </div>
        <div className={style.copyright}>
          <div>Copyright © 2023 Quintus, All rights reserved. Powered by MoxCreative.</div>
          <div className={style.links}>
            <p>Term of use</p>
            <span> | </span>
            <p>Privacy Policy</p>
            <span> | </span>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
