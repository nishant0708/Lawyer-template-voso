import React from "react";
import style from "@/Components/Theme5.module.css";
import Image from "next/image";

const Banner = ({ data }) => {
  const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
  return (
    <div className={style.banner_main}>
      <div className={style.banner}>
        <div className={style.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.business_details?.business_description,
            }}
          ></div>
          <div className={style.button_div}>
            <p className={style.discovermore}>Discover More</p>
          </div>
        </div>
        <div className={style.banner_img}>
          <Image
            src={`${BACKEND_URL}/${data.business_details?.business_cover_image}`}
            alt="Stars Background"
            className={`${style.background_img}`}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
