import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5  md:px-5 lg:px-28 ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold"> Next Blog</h1>
        {/* logo here */}
        {/* <Image
          src={assets.js}
          width={180}
          className="w-[130px] sm:w-auto"
          alt=" "
        ></Image> */}
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000">
          Get sterted
        </button>
      </div>
      <div className="text-center my-8 ">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          culpa magnam labore incidunt aliquid exercitationem commodi illo quae!
          Explicabo, nihil!
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 shadow-[-7px_7px_0px_#000000] sm:scale-100 mx-auto border border-black"
          action=""
        >
          <input
            type="email"
            placeholder="Enter your email..."
            className="pl-4 outline-none "
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
