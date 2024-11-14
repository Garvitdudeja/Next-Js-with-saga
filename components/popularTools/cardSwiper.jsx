import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';

// import required modules
import { Card, Col, Row } from 'react-bootstrap';

const CardSwiper = () => {
  const swiperCardData = [
    {
      title: "Free Throw Counter",
      content: "A FreeThrow Counter is a tool or application designed to track and count the number of free throws attempted and made by a basketball player during practice or a game.",
      image: "./images/slide-card-1.svg",
    },
    {
      title: "Free Throw Counter",
      content: "The 'Place Holder Tool' in basketball typically refers to a method or device used during practice sessions to simulate a defender or a specific scenario.",
      image: "./images/slide-card-2.svg",
    },
    {
      title: "Free Throw Counter",
      content: "A FreeThrow Counter is a tool or application designed to track and count the number of free throws attempted and made by a basketball player during practice or a game.",
      image: "./images/slide-card-1.svg",
    }, {
      title: "Free Throw Counter",
      content: "The 'Place Holder Tool' in basketball typically refers to a method or device used during practice sessions to simulate a defender or a specific scenario.",
      image: "./images/slide-card-2.svg",
    },
    {
      title: "Free Throw Counter",
      content: "A FreeThrow Counter is a tool or application designed to track and count the number of free throws attempted and made by a basketball player during practice or a game.",
      image: "./images/slide-card-1.svg",
    }, {
      title: "Free Throw Counter",
      content: "A FreeThrow Counter is a tool or application designed to track and count the number of free throws attempted and made by a basketball player during practice or a game.",
      image: "./images/slide-card-2.svg",
    },
    {
      title: "Free Throw Counter",
      content: "A FreeThrow Counter is a tool or application designed to track and count the number of free throws attempted and made by a basketball player during practice or a game.",
      image: "./images/slide-card-1.svg",
    },
  ]
  return (
    <div>
      <Swiper
        breakpoints={{
          376: {
            width: 576,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        // spaceBetween={30}
        // centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        style={{  padding: "0 16px" }}
      >

        {swiperCardData.map((item, index) => (
          <SwiperSlide>
            <Card key={index} className="swiperCard item_center h-100">
              <img className=" img-fluid swiperCardImg" src={item.image} alt="slide-card" />
              <h6 className="font-bold text-center font_24 text-[#1A1A1A]">{item.title}</h6>
              <p className="masterContent text-center">
                {item.content}
              </p>
              <p className='blogViewLink'>Explore
                <img className='ms-2 max-w-[15px]' src='./images/blue-arrow.svg' alt='blue-arrow' />
              </p>
              <img />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardSwiper