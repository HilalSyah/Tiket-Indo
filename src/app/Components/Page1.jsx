import React from "react";

export const Page1 = () => {
  return (
    <div className="page1 min-h-screen">
      <div className="position flex justify-between">
        <div className="text p-[6rem] mt-[5rem]">
          <p className=" font-lexend text-4xl font-medium">Jelajahi Nusantara dengan Mudah, </p>
          <p className=" font-lexend text-4xl font-medium mt-4">
            Temukan Tiket untuk Setiap Petualangan <br />
            Anda
          </p>
          <p className="font-lexend font-light text-3xl text-[#2C3E50] mt-10">
            Dari pegunungan hingga pantai, kami sediakan tiket <br />
            transportasi terbaik untuk setiap kebutuhan perjalanan <br />
            Anda.
          </p>
        </div>

        <div className="gambar me-[5rem]">
          <img className="mb-" src="/Assets/Image/GambarWeb/Group 212.png" alt="" width={380} />
        </div>
      </div>
    </div>
  );
};

export default Page1;
