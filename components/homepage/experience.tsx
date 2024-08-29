"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Experience = () => {
  const ex = [
    {
      text: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
      author: "Donette Fondren",
    },
    {
      text: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
      author: "Donette Fondren",
    },
    {
      text: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
      author: "Donette Fondren",
    },
    {
      text: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
      author: "Donette Fondren",
    },
  ];
  return (
    <div className="flex items-center bg-[url('/images/banner_1.jpg')] relative bg-fixed bg-center bg-cover h-[calc(100vh-85.6px)] min-w-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      <div className="absolute top-[50%] -translate-y-[50%] left-[50%] backdrop-blur-lg -translate-x-[50%] w-[30%] border-[2px] border-solid border-primary h-[70%] rounded-t-full py-0"></div>
      <div className="absolute  top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 flex flex-col gap-6 items-center">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              spaceBetween: 50,
              slidesPerView: 1,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },

            768: {
              slidesPerView: 1.4,
              spaceBetween: 50,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          spaceBetween={50}
          slidesPerView={1.2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {ex.map((item: any, index: number) => {
            return (
              <SwiperSlide key={item.img + index} className="">
                <p className="text-white">{item.text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;
