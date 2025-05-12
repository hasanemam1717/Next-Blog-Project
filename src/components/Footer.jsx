// import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex  justify-around flex-col gap-2 sm:flex-row bg-black py-5 ic">
      {/* <Image src={}></Image> */}
      <h1 className="text-3xl text-white ">Next Blog</h1>
      <p className="text-sm text-white ">
        All right reserved .Copyright@nextBlog
      </p>
      <div className="flex text-white gap-3">
        <h1>Facebook</h1>
        <h1>Instagram</h1>
      </div>
    </div>
  );
};

export default Footer;
