import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../styles/Slider.css'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="slider">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649433316/contentservice/all.gif_BJcJoATQ9.gif' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649341669/contentservice/mouka%20royal%20copy.png_HJTJH_2Xc.png' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648986439/contentservice/handk.gif_BkpBtZPXq.gif' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649767895/contentservice/5ALive.jpg_B1nRHxQN9.jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577279/contentservice/electronic.gif_BkLraWlVc.gif' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649086388/contentservice/sams-upgrade.jpg_HJ2nkcd7q.jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577326/contentservice/phones.gif_ry8d6beE5.gif' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577284/contentservice/home.gif_BywraWeNc.gif' /></SwiperSlide>
        <SwiperSlide><img src='https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577284/contentservice/home.gif_BywraWeNc.gif' /></SwiperSlide>
      </Swiper>
    </div>
  );
}
