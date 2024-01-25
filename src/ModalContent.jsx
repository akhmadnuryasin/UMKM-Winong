import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ModalContentComponent = ({ title, images }) => {
  return (
    <>
      <p className="text-center">{title}</p>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper text-white rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ModalContentComponent;
