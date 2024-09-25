import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export const Page3 = () => {
  return (
    <div className="pages3 bg-[#DDE6ED] min-h-screen flex items-center justify-center flex-col">
      <p className="font-lexend">Ide Liburan</p>
      <p className="font-lexend text-2xl">Tempat indah yang bisa kamu kunjungi dengan keluarga/teman</p>

      <div className="image-wisata flex me-[15rem] mt-[3rem] ">
        <div className="image1 justify-start items-start me-[16rem] overflow-hidden ">
          <img className="absolute transform transition-transform duration-300 hover:scale-105" src="/Assets/Image/GambarWeb/Gambar1.png" alt="" />
          <p className="relative font-lexend font-black text-3xl mt-[23rem] ms-6 text-white">Bromo</p>
        </div>
        <div className="image2 flex flex-col me-[5rem]">
          <div className="img1">
            <img className=" absolute transform transition-transform duration-300 hover:scale-105" src="/Assets/Image/GambarWeb/Gambar2.png" alt="" />
            <p className="relative font-lexend font-black text-3xl text-white mt-[10rem] ms-5">Bromo</p>
          </div>
          <div className="img2 mt-[3rem]">
            <img className=" absolute transform transition-transform duration-300 hover:scale-105" src="/Assets/Image/GambarWeb/Gambar3.png" alt="" />
            <p className="relative font-lexend font-black text-3xl text-white mt-[10rem] ms-5">Bromo</p>
          </div>
        </div>
        <div className="image1 justify-end items-end ms-[15rem]">
          <img className="absolute transform transition-transform duration-300 hover:scale-105" src="/Assets/Image/GambarWeb/Gambar4.png" alt="" />
          <p className="relative font-lexend font-black text-3xl mt-[23rem] ms-6 text-white">Bromo</p>
        </div>
      </div>

   <Link href="/Wisata">
   <div className="tombol w-[62.5rem] h-[2.7rem] bg-buttonColor flex items-center justify-center rounded-[7px] mt-[4rem] hover:bg-slate-500">
        <button>
          <GoArrowRight size={30} strokeWidth={1} />
        </button>
      </div>
   </Link>
    </div>
  );
};

export default Page3;
