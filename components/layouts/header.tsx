"use client";
import Image from "next/image";
import Button from "../common/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.pageYOffset > 1) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const clx = isSticky ? " bg-black fixed top-0 left-0 right-0 " : "bg-transparent absolute top-0 left-0";

  const menu = [
    { title: "Home", url: "/" },
    { title: "Rooms", url: "/rooms" },
    { title: "Reservation", url: "/reservation" },
    { title: "Pages", url: "/pages" },
    { title: "News", url: "/news" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <div className={"w-full z-20 duration-500 " + clx}>
      <div className="w-full py-6 container-full flex items-stretch relative flex-row-reverse xl:flex-row">
        <div className="flex gap-0 items-center justify-center">
          <Image
            src={
              "https://madebydesignesia.com/themes/almaris/images/logo-white.webp"
            }
            alt="header"
            height={37}
            width={160}
            unoptimized
          />
        </div>

        <div className="pb-2.5 xl:ml-auto ml-0 hidden xl:flex gap-8 flex-wrap items-center justify-center translate-y-1 ">
          {menu.map((item: any, index: number) => {
            return (
              <div className="" key={item + index}>
                <p className="text-white cursor-pointer text-content">{item.title}</p>
              </div>
            );
          })}
        </div>
        <Button color="primary" className="uppercase text-sm ml-auto">
          Reservation
        </Button>
      </div>
    </div>
  );
};

export default Header;
