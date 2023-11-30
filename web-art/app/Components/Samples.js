"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import sample1 from "@/public/asset/image/sample1.jfif"
// import sample2 from "@/public/asset/image/sample2.jfif"
import sample3 from "@/public/asset/image/sample4.png"
import sample4 from "@/public/asset/image/sample5.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from "next/image";
function Samples() {
  return (
    <div className="container px-4 md:px-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl m-auto mt-14">
        <h3 className="text-3xl font-semibold py-8 text-3C6255 text-center lg:text-start"> نمونه کارها</h3>
      <Swiper
         effect={'coverflow'}
        
         centeredSlides={true}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 50,
           stretch: 0,
           depth: 100,
           modifier: 1,
           slideShadows: true,
         }}
         pagination={true}
         modules={[EffectCoverflow, Pagination]}
         className="mySwiper"
      >
        <SwiperSlide> <Image src={sample3} alt="sample1"/></SwiperSlide>
        <SwiperSlide><Image src={sample4} alt="sample2"/></SwiperSlide>
        <SwiperSlide><Image src={sample3} alt="sample3"/></SwiperSlide>
        <SwiperSlide><Image src={sample4} alt="sample4"/></SwiperSlide>
        <SwiperSlide><Image src={sample3} alt="sample1"/></SwiperSlide>
        <SwiperSlide><Image src={sample3} alt="sample3"/></SwiperSlide>
        <SwiperSlide><Image src={sample4} alt="sample4"/></SwiperSlide>
        <SwiperSlide><Image src={sample3} alt="sample1"/></SwiperSlide>
        <SwiperSlide><Image src={sample4} alt="sample2"/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Samples;
