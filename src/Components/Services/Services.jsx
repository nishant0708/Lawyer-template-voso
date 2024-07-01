"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from "@/Components/Theme5.module.css"
import axios from "axios"
// const cardData = [
//   {
//     id: 1,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias rerum quidem officiis laborum magni odit incidunt, distinctio praesentium officia unde, mollitia corporis expedita possimus pariatur repellat quas illum impedit.
//     Reiciendis quibusdam dolor ipsam omnis. Reprehenderit culpa facilis nam placeat cumque non consequatur, doloribus inventore esse quis excepturi est sapiente maiores ipsa hic eligendi recusandae. Esse dolores aliquam eaque blanditiis.
//     Modi similique cupiditate, tenetur magnam quia quisquam exercitationem, deserunt non odit numquam maiores ipsum reprehenderit, veritatis repudiandae omnis. Deserunt labore eum a odit temporibus culpa eligendi ut iusto ullam rem.
//     Porro alias hic, velit vero quod sed ducimus debitis consequuntur atque possimus facere repellendus ratione, magni unde qui harum nisi, repellat ut. Ipsam delectus libero fuga provident laudantium omnis perspiciatis?
//     Tempore necessitatibus, quae numquam repudiandae dolor sunt laboriosam laudantium porro asperiores et mollitia facilis quo sapiente iste explicabo voluptatem inventore accusamus debitis dignissimos error rerum. Inventore culpa reiciendis beatae facilis.
//     Rerum cumque eius vitae temporibus cum. Accusantium dolor fugit veritatis excepturi, incidunt alias velit ipsa quidem culpa molestias. Necessitatibus earum, molestias iusto cupiditate provident iste voluptate tempora odit magnam quis.
//     Eaque totam officiis esse placeat accusamus repellendus. Quo, quam corrupti dolorem recusandae nulla sint eos error totam, blanditiis nesciunt harum beatae nostrum maiores soluta aspernatur autem sapiente saepe quidem. Ducimus.
//     Consequuntur culpa ipsum eligendi obcaecati. Quod eum enim maiores tempore, repudiandae temporibus exercitationem, eos impedit, illo ratione aut. Magni ipsa consequatur facere, culpa tempora assumenda laudantium consectetur odit libero quae.
//     Culpa at dignissimos maiores nobis excepturi expedita, hic non aliquam optio accusantium fugit, recusandae soluta iure eveniet tempore animi magnam eaque laudantium quidem repellendus voluptatem! Cupiditate architecto dolores consequuntur minima.
//     Quas dignissimos quo aliquam quisquam quidem ullam dolor distinctio culpa, eos vel cum aperiam nulla rem expedita recusandae placeat mollitia libero aut tempore officia nam exercitationem. Est ab mollitia omnis!`
//   },
//   {
//     id: 2,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
//   },
//   {
//     id: 3,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
//   },
//   {
//     id: 4,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
//   },
//   {
//     id: 5,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
//   },
//   {
//     id: 6,
//     imageSrc: "/Assets/service3.jpg",
//     heading: "Personal Consultation",
//     description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
//   },
// ];

const Services = ({data}) => {
  const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleDetailsClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${BACKEND_URL}/service?userId=${data?.userId?._id}`
      );
      if (res.data.success) {
        setServiceData(res?.data?.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
console.log("hey",serviceData);
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to know more about your service"
  );

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className={style.service_main}>
    <div className={style.services}>
      <div className={style.servicesheading}>
        <h1>Services</h1>
      </div>
      <div className={style.servicesdesc}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={style.container}>
        {serviceData?.map(serviceData => (
          <div key={serviceData?._id} className={style.card}>
            <div className={style.overlay1}></div>

            <div className={style.cardimage_container}>
              <Image src= {`${BACKEND_URL}/${serviceData?.service_image}`} alt="" width={300} height={300} />
              
            </div>
            <div className={style.carddetail}>
              <p className={style.cardheading}>{serviceData.service_name}</p>
              <p className={style.description}  dangerouslySetInnerHTML={{ __html: serviceData.service_description}} ></p>
              <p className={style.button}>Learn More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;
