import React from "react";
import style from "@/Components/Theme5.module.css";

const Buisness_hours = () => {
    const openingHoursData = [
        { day: "Sun", open: "Closed", close: "Closed" },
        { day: "Mon", open: "10:00 AM", close: "5:00 PM" },
        { day: "Tue", open: "10:00 AM", close: "5:00 PM" },
        { day: "Wed", open: "10:00 AM", close: "5:00 PM" },
        { day: "Thu", open: "10:00 AM", close: "5:00 PM" },
        { day: "Fri", open: "10:00 AM", close: "5:00 PM" },
        { day: "Sat", open: "10:00 AM", close: "5:00 PM" },
    ];

    return (
       <div> <div className={style.buisnesshrs}>
            <p className={style.Buisness_hours_title}>Business Hours</p>

            <div className={style.buisness_main}>
            
            <div className={style.buisness_hour_img}>
                <img src="/Assets/bookinghrs1.png" alt=""/>
            </div>
            <div className={style.buisness_container}>
            {openingHoursData.map((hours, index) => (
                <div key={index} className={style.buisness_box}>
                    <div className={style.buisnesshrs_icon}>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                            />
                        </svg>
                    </div>
                    <div className={style.buisness_detail}>
                        <p className={style.buisness_day}>{hours.day}</p>
                        <p className={style.buisnesstime}>{hours.open} - {hours.close}</p>
                    </div>
                </div>
            ))}</div>
            </div>
        </div></div>
    );
};

export default Buisness_hours;
