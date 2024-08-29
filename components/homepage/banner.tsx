"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { StarIcon } from "../icons";
import Button from "../common/button";

const Banner = () => {
  const banner = [
    {
      img: "banner_1.jpg",
      title: "Where Every Stay is Extraordinary",
      description:
        "Discover the perfect blend of luxury, comfort, and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.",
      url: "",
    },
    {
      img: "banner_2.jpg",
      title: "Experience Hospotality Like Never Before",
      description:
        "Discover the perfect blend of luxury, comfort, and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.",
      url: "",
    },
  ];
  return (
    <div className="w-full h-[calc(100vh-85.6px)]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        {banner.map((item: any, index: number) => {
          return (
            <SwiperSlide className="bg-white w-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
              <div className="absolute top-[50%] -translate-y-[50%] left-[50%] backdrop-blur-lg -translate-x-[50%] w-[40%] border-[2px] border-solid border-primary h-[80%] rounded-t-full py-0"></div>
              <div className="absolute  top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 flex flex-col gap-6 items-center">
                <div className="flex gap-3">
                  <StarIcon className="w-3.5 h-3.5 fill-[#E4A853]" />
                  <StarIcon className="w-3.5 h-3.5 fill-[#E4A853]" />
                  <StarIcon className="w-3.5 h-3.5 fill-[#E4A853]" />
                  <StarIcon className="w-3.5 h-3.5 fill-[#E4A853]" />
                  <StarIcon className="w-3.5 h-3.5 fill-[#E4A853]" />
                </div>
                <p className="text-6xl text-center font-light text-white">{item.title}</p>
                <p className="text-xl text-center font-light text-neutral-200 w-[70%]">{item.description}</p>
                <Button border="default" color="secondary" className="mt-10 text-content text-md">OUR ACCOMODATION</Button>
              </div>
              <Image
                src={"/images/" + item.img}
                alt=""
                height={300}
                width={400}
                unoptimized
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
