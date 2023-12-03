import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";
import rahmuni from "../public/dev-ed-wave.png";

const Hero = () => {
  return (
    <div className="text-center p-10">
      <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-5xl">
        Rakhymzhan Turlybek
      </h2>
      <h3 className="text-xl py-2 md:text-2xl">
        Back-end Developer and freelancer.
      </h3>
      <p className="text-s py-3 leading-7 md:text-lg max-w-lg mx-auto">
        Freelancer providing services for programming and backend development
        needs. Join me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 ">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillInstagram />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image
          src={rahmuni}
          alt="rahmui photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
