"use client";
import React, { useState } from 'react';
import styles from '@/Components/Theme5.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCwMv49R61qm7nan5-gQ9s0n3ihqCf8ZKmz87oBI1UCUGTkse9",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCwMv49R61qm7nan5-gQ9s0n3ihqCf8ZKmz87oBI1UCUGTkse9",
    "https://live.staticflickr.com/4211/35742680691_f459003310_b.jpg",
    "https://live.staticflickr.com/4211/35742680691_f459003310_b.jpg",
    "https://i.pinimg.com/originals/73/b1/14/73b114d47d261af05ed35c7ce64f1e19.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCwMv49R61qm7nan5-gQ9s0n3ihqCf8ZKmz87oBI1UCUGTkse9",
   
  ];

  const openCarousel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeCarousel = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles['gallery-section']}>
      <div className={styles['container']}>
        <h2 className={styles['gallery-section__title']}>Photo Documentation</h2>
       
        <div className={styles['gallery-section__box']}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles['gallery-section__box-item']}
              onClick={() => openCarousel(index)}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className={styles['gallery-section__box-item-img']}
              />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className={styles['carousel-overlay']}>
          <button className={styles['carousel-close']} onClick={closeCarousel}>X</button>
          <Carousel
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            className={styles['carousel']}
          >
            {images.map((src, index) => (
              <div key={index} className={styles['carousel__slide']}>
                <img src={src} alt={`Carousel Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <button className={`${styles['custom-arrow']} ${styles['custom-arrow--prev']}`} onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button className={`${styles['custom-arrow']} ${styles['custom-arrow--next']}`} onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
