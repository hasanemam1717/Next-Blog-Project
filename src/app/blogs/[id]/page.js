"use client";

import blogData from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = ({ params }) => {
  const id = params.id;
  const [data, setData] = useState(null);
  console.log(data);
  const fetchBlogData = () => {
    for (let i = 0; i < blogData.length; i++) {
      if (Number(id) === blogData[i].id) {
        setData(blogData[i]);
        console.log(blogData[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      {" "}
      <div className="bg-gray-200 py-5 md:px-12 px-5 lg:px-28">
        <div className="flex justify-between items-center  ">
          <Link href={"/"}>
            <h1 className="text-black text-3xl"> Next Blog</h1>
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7Px_0px_#000000]">
            Get Started
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <p>Author Name</p>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto  mb-10 ">
          <Image
            className="border-4 border-white "
            src={data.image}
            height={720}
            alt=" "
            width={1280}
          ></Image>
          <h1 className="my-8 font-semibold text-[26px]">Introduction:</h1>
          <p>{data.description}</p>
          <h1 className="my-8 text-[18px] font-semibold ">
            How To Create Full Stack Blog App Using Next JS & MongoDB |{" "}
          </h1>
          <h1 className="my-3 ">
            {" "}
            To Create Full Stack Blog App Using Next JS & MongoDB |{" "}
          </h1>
          <div className="my-24 ">
            <p className="text-black font-semibold my-4">
              Share this article on social media.
            </p>
            <div className="flex gap-2">
              <h1>facebook</h1>
              <h1>Twitter</h1>
              <h1>google</h1>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  ) : (
    <> </>
  );
};
export default Blog;
