import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = () => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Image
        src={assets.lake}
        alt=" "
        height={400}
        width={400}
        className="border border-black"
      ></Image>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        Repudiandae
      </p>
      <div className="p-5">
        <h1 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          obcaecati.
        </h1>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          nesciunt reprehenderit quasi totam culpa vel eius ad minus sit ut,
          quos architecto itaque dolore? Blanditiis?
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center ">
          Read more..
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
