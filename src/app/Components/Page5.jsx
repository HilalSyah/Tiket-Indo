import React from "react";
import Link from "next/link";

export const Page5 = () => {
  return (
    <div className="Page5 min-h-screen bg-[#D5DEE4] flex items-center justify-between">
      <div className=" absolute pesawat mt-10">
        <img src="/Assets/Image/GambarWeb/Pesawat.png" alt="" width={800} />
      </div>
      <div className=" relative teks flex flex-col items-center justify-center ms-[37rem] mb-[rem]">
        <p className="text-[3rem] font-lexend font-extrabold text-[#747474] tracking-[.4rem] ">Terbang Lebih Hemat!</p>
        <img className="ms-[22.5rem] mb-[rem] relative" src="/Assets/Image/GambarWeb/Diskon.png" alt="" width={500} height={500} />
        <p className="text-center font-lexend font-light text-[24px] text-[#646464] ms-[8rem] mt-[1rem]">
          Nikmati pengalaman perjalanan yang luar biasa dengan harga yang <br />
          lebih terjangkau. Diskon 25% ini hanya berlaku untuk waktu terbatas, <br />
          jadi pastikan Anda segera memesan tiket untuk mendapatkan <br />
          penawaran terbaik!
        </p>
        <Link href="/Pesawat_Tiket">
        <button className="font-bold text-2xl flex justify-center items-center bg-slate-300 mt-[3rem] w-[20rem] h-[3rem] rounded-lg ms-[9rem]">
          Dapatkan Penawaran
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Page5;
