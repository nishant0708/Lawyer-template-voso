"use client";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import style from "@/Components/Theme5.module.css";
import { TextField } from "@mui/material";

const BookApointment = ({color}) => {
  return (
    <div className={style.BookApointment_main}>
    <div className={style.BookApointment}>
      <p className={style.bookheading}>Book Appointment</p>

      <div className={style.book_img_container}>
        <div className={style.bookimg_back}>
          <Image
            src="/Assets/lawyer1.png"
            width={500}
            height={500}
            alt=""
            className={style.bookimage}
          />
        </div>
        <div className={style.calendar_container}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={dayjs()}
        sx={{
          width: "100%",
          backgroundColor: `${color.background}`,
          
          border:`2px dotted ${color.secondary}`,
          '& .MuiButtonBase-root': {
            color:`${color.text_secondary}`, // Text color for buttons
          },
          '& .MuiPickersDay-root': {
            color:`${color.text_secondary}`, // Text color for days
          },
          '& .MuiTypography-root': {
            color:`${color.text_secondary}`, // Text color for all typography (e.g., month, year)
          },
          '& .MuiPickersCalendarHeader-root': {
            color:`${color.text_secondary}`, // Text color for calendar header
          },
          '& .MuiSvgIcon-root': {
            color:`${color.text_secondary}`, // Color for icons (e.g., arrows)
          },
          '& .Mui-selected': {
            backgroundColor: `${color.ternary} !important`, // Background color for selected date
            color: `${color.text_primary}!important`, // Text color for selected date
          },
        }}
        slotProps={{
          day: {
            sx: {
              '&.Mui-selected': {
                backgroundColor: `${color.ternary}`, // Background color for selected date
                color: `${color.text_primary}`, // Text color for selected date
              },
              '&.Mui-selected:hover': {
                backgroundColor: `${color.secondary}`, // Darker red on hover for selected date
              },
            },
          },
          actionBar: {
            sx: {
              '& .MuiButton-root': {
                color: `${color.ternary}`,
                fontWeight:"600" // Text color for Cancel and OK buttons
              },
            },
          },
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth />
        )}
      />
    </LocalizationProvider>
        </div>
      </div>
    </div></div>
  );
};

export default BookApointment;
