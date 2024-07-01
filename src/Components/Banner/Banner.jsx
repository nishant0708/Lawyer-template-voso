import React from "react";
import style from "@/Components/Theme5.module.css";
import Image from "next/image";

const Banner = ({data}) => {
  const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
  return (
    <div className={style.banner_main}>
      <div className={style.banner}>
        <div className={style.banner_img}>
          <Image
            // src="/Assets/bg1.jpeg"
            src= {`${BACKEND_URL}/${data.business_details?.business_cover_image}`}
            alt="Stars Background"
            className={`${style.background_img} ${style.stars_img}`}
            layout="fill"
            objectFit="cover"
          />
          {/* <Image
           src= {`${BACKEND_URL}/${data.business_details?.business_cover_image}`}
            alt="Foreground Image"
            className={`${style.background_img1} ${style.foreground_img}`}
            width={400}
            height={400}
           
          /> */}
          <div className={style.overlay}></div>
        </div>
        <div className={style.content}>
      <img src='/Assets/law.svg' alt=""/>
      <div dangerouslySetInnerHTML={{ __html: data.business_details?.business_description }} >
            {/* <h1  >Injustice anywhere is a threat to justice everywhere.</h1>
          </div>
          <div className={style.banner_description}>
            <h3>Discover comprehensive legal guidance and solutions! Empower your world with expert advice on laws, rights, and justice.</h3> */}
          </div>
          <div className={style.button_div}>
            <p className={style.getstarted}>Get Started</p>
            <p className={style.discovermore}>Discover More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
