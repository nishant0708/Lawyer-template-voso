import React from "react";
import style from "@/Components/Theme5.module.css";
import Image from "next/image";
import StaticContent from "../StaticContent/StaticContent";


const Aboutus = ({ data }) => {
  return (
    <div className={style.aboutus_main}>
      <div className={style.aboutus}>
        <div className={style.background}>
          <div className={style.content}>
            <div className={style.aboutcontent}>
              <p className={style.aboutus_title}>About Us</p>
              <h1>Helping to overcome and ease the legal burden</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Commodo pulvinar
                molestie pellentesque urna libero velit porta. Velit
                pellentesque hac gravida pellentesque est semper. Duis lectus
                gravida ultricies eleifend in pharetra faucibus orci sem. Proin
                ac a cursus praesent.
              </p>

              <button>See Detail</button>
            </div>
            <div className={style.imgcontainer}>
              <Image
                src="/Assets/about.jpeg"
                alt="about us"
                className={style.about_img}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Aboutus;
