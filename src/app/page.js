import Banner from '@/Components/Banner/Banner'
import BookApointment from '@/Components/BookAppointment/BookApointment';
import Buisness_hours from '@/Components/Buisness_Hours/Buisness_hours';
import Contact from '@/Components/ContactUS/Contact';
import Gallery from '@/Components/Gallery/Gallery';
import Services from '@/Components/Services/Services'
import StaticContent from '@/Components/StaticContent/StaticContent';
import { getBusinessDetails } from '@/Components/apicall';
import React from 'react'

const Page = async() => {
  const colorScheme = {
    primary: "#1e2e45",
    background: "#e8e9e1",
    secondary: "#9a9162",
    ternary: "#6f4e37",
    primary_text: "#fff",
    secondary_text: "#000",
  };
  const businessData = await getBusinessDetails("justicejunction");
  // console.log("ggg",businessData);
  return (
    <div>
      <Banner data={businessData} />
      <Services data={businessData}/>
      <StaticContent/>
      <BookApointment color={colorScheme}/>
      <Gallery/>
      <Buisness_hours/>
      <Contact data={businessData}/>
    </div>
  )
}

export default Page