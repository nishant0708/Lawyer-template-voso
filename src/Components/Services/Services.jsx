"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "@/Components/Theme5.module.css";
import axios from "axios";

const Services = ({ data }) => {
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
  console.log("hey", serviceData);
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
          {serviceData?.map((serviceData) => (
            <div key={serviceData?._id} className={style.card}>
              <div className={style.overlay1}></div>

              <div className={style.cardimage_container}>
                <Image
                  src={`${BACKEND_URL}/${serviceData?.service_image}`}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
              <div className={style.carddetail}>
                <p className={style.cardheading}>{serviceData.service_name}</p>

                <p className={style.button}>Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
