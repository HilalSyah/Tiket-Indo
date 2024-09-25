import React from "react";
import Link from "next/link";
import { productPesawat } from "../Library/ProdukPesawat";

// const dataTiket = [
//   {
//     img: "Assets/Image/GambarWeb/jakarta.png",
//     tujuan: "Yogyakarta-Jakarta",
//     logoTiket: "Assets/Icons/batik-air-logo.png",
//     harga: "679,990",
//     jenisPesawat: "Batik Air",
//   },
//   {
//     img: "Assets/Image/GambarWeb/Background (2).png",
//     tujuan: "Jakarta-Surabaya",
//     logoTiket: "Assets/Icons/lion_logo.png",
//     harga: "1,550,000",
//     jenisPesawat: "Lion Air",
//   },
//   {
//     img: "Assets/Image/GambarWeb/Background (3).png",
//     tujuan: "Jakarta-Bali",
//     logoTiket: "Assets/Icons/garuda-logo.png",
//     harga: "1,990,000",
//     jenisPesawat: "Garuda Indonesia",
//   },
//   {
//     img: "Assets/Image/GambarWeb/Background (4).png",
//     tujuan: "Semarang-Lombok",
//     logoTiket: "Assets/Icons/citilink-logo.png",
//     harga: "2,390,000",
//     jenisPesawat: "Citilink",
//   },
//   {
//     img: "Assets/Image/GambarWeb/Background (5).png",
//     tujuan: "Jakarta-Pontianak",
//     logoTiket: "Assets/Icons/wings_logo.png",
//     harga: "1,990,000",
//     jenisPesawat: "Wings Air",
//   },
// ];

export const Page6 = () => {
  return (
    <div className="page6 flex justify-center items-center min-h-[75vh] flex-col relative bg-[#D5DEE4]">
      <p className=" absolute font-lexend font-black text-[200px] z-0 mb-[12rem] tracking-[15px] text-[#B8C8D3]">Pesawat</p>
      <div className="teks flex justify-center items-center font-jost font-medium me-[70rem] relative z-10 ms-[7rem] w-[50rem]">
        <p className="text-center mb-[3rem] text-[24px]">Yuk ,Terbang Mengelilingi Indonesia</p>
      </div>
      <div className="foto flex justify-center items-center ms-10 gap-[5rem] relative z-10">
        {productPesawat.map((d) => (
          <div className="foto shadow-md w-[210px] h-[290px] rounded-xl mt-14 relative z-10 bg-[#9DB2BF]">
            <img src={'pesawat (1).png'} alt="" className="w-full h-[131px] rounded-t-lg" />
            <div className="p-2 ml-1 relative z-10">
              <p className="font-bold text-sm">{d.tujuan}</p>
              <div className="flex items-center text-xs">
                <img src={d.logoTiket} alt="" className="w-8 h-8 mt-4" />
                <p className="ml-2 mt-4">{d.jenisPesawat}</p>
              </div>
              <p className="mt-2">Start From</p>
              <Link href={d.href}>
                <button className="font-extrabold text-red-500  p-1 w-30 rounded-md mt-1 hover:bg-[#BCC9D1]">{d.harga}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;
