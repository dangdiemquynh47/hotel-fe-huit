import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#181818] text-white">
      <div className="container-full flex items-center pt-40 pb-20 gap-x-20">
        <div className="w-1/3 flex items-start gap-4">
          <div className="flex flex-col items-center justify-center">
            <p>Address</p>
            <p>
              742 Evergreen Terrace <br /> Brooklyn, NY 11201
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4">
          <Image
            src={"/images/logo.webp"}
            alt="header"
            height={47}
            width={200}
            unoptimized
          />
        </div>
        <div className=" flex ml-auto gap-4">
          <div className="flex flex-col items-center justify-center">
            <p>Contact Us</p>
            <p>T. +929 333 9296</p>
            <p>M. contact@almaris.com</p>
          </div>
        </div>
      </div>
      <div className="py-5 border-t-[1px] border-solid border-primary/20">
        <p className="text-md text-white text-center">Copyright 2024 - QT2D</p>
      </div>
    </div>
  );
};

export default Footer;
