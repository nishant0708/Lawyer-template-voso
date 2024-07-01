"use client";
import React, { useState } from 'react'
import style from '@/Components/Theme5.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = ({data}) => {
    const [isOpen, setOpen] = useState(false);
  const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
    const handleToggle = () => {
      setOpen(!isOpen);
    };
    // console.log("Navbar",data)
  return (
    <div className={style.navbar_main}>
    <div className={style.navbar}>
    <div className={style.hamburger} onClick={handleToggle}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
        <div className={style.navbar_img}> 
           <Image  src= {`${BACKEND_URL}/${data.business_details?.business_profile_image}`} alt="" width={200} height={100} /> 
           {/* <Image  src="/Assets/logo.png" alt="" width={200} height={100} />  */}
          
        </div>
        <div className={style.navbar_contents}>
          <div className={`${style.navbar_list} ${isOpen ? style.toggled : ''}`}>
           <Link href='/'>  <p>Home</p></Link>
            <Link href="/About"><p>About</p></Link>
            <p>Service</p>
            <p>Contact</p>
            <Link href="/Blog"> <p>Blog</p></Link>
          </div>
          <div>
            <p className={style.navbar_icons}>Book Appointment </p>
          </div>
          {/* <div className={style.navbar_icons}>
            <span><FaFacebookF size={14}/></span>
            <span> <FaInstagram size={14}/></span>
            <span> <FaTwitter size={14}/></span>
            <span><FaYoutube size={14}/></span>
          </div> */}
        </div>
    </div>
    </div>
  )
}

export default Navbar