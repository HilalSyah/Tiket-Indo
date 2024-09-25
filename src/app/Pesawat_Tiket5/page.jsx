"use client";

import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import "../globals.css";

export const Pesawat_Tiket = () => {
  const [isPP, setPP] = useState(false);

  const deteksi = () => {
    setPP((prevState) => !prevState);
  };

  const [ke, setKe] = useState("");
  const [dari, setDari] = useState("");
  const [jenis, setJenis] = useState("");
  const [pergi, setPergi] = useState("");
  const [pulang, setPulang] = useState("");

  // const handleLanjutBayar = () => {
  //   const data = {
  //     dari,
  //     ke,
  //     jenis,
  //     tanggalPergi: pergi,
  //     tanggalPulang: pulang,
  //     isPP
  //   };
  //   console.log("Data yang disimpan:", data);
  //   localStorage.setItem('pesawatTiketData', JSON.stringify(data));
  // };

  return (
    <div className="Kapal_Tiket min-h-screen bg-bgTiketPesawat bg-no-repeat bg-cover bg-center flex">
      <div className="kelompok1 p-[3rem]">
        <Link href="/">
          <div className="logo-back">
            <GoArrowLeft size={30} color="white" />
          </div>
        </Link>
        <div className="teks font-lexend text-[54px] font-bold text-white p-[5rem]">
          <p className="">
            Cek Harga Tiket <br />
            Pesawat Online Murah <br />
            dan Promo Hari Ini
          </p>
        </div>
      </div>
      <div className="pesan-tiket bg-trasnparant w-[500px] h-[700px] flex flex-col justify-start items-start mt-[1.5rem] rounded-[10px] font-lexend gap-[2rem] p-[3.5rem] transition-all duration-500">
        <div className="tanggal bg-[#344657] w-[24rem] flex flex-col rounded-[10px] p-[1rem]">
          <div className="toggle flex items-center">
            <div className="pp1 ms-[1rem] flex flex-col gap-2 mb-[rem]">
              <p className="text-2xl font-bold text-white">Tanggal Pergi</p>
              <div className="w-[5rem]">
                <input className="bg-[#E6E6E6] w-[17.5rem] h-[2.7rem] rounded-[4px] p-2 outline-none border-none text-[20px]" type="date" value={pergi} onChange={(e) => setPergi(e.target.value)} />
              </div>
            </div>
            <div className="p-7 ms-[6rem] mb-3 transition-all duration-500 w-[3rem] h-[3rem] justify-center items-center">
              <p className="text-center font-lexend font-bold ms-2 text-white">PP</p>
              <label htmlFor="check" className="flex bg-gray-400 cursor-pointer relative w-10 h-5 rounded-full border-[1px] border-white p-[2.5px] transition-all duration-500 ">
                <input type="checkbox" className="sr-only peer" id="check" onChange={deteksi} />
                <span className="w-[13.5px] h-[13.5px] bg-white absolute rounded-full left-[3px] transition-all duration-500 peer-checked:left-[22px] peer-checked:bg-[#908A83]"></span>
              </label>
            </div>
          </div>
          {isPP && (
            <div className="pp2 ms-[1rem] mt-[1rem] flex flex-col gap-2">
              <p className="text-2xl font-bold text-white">Tanggal Pulang</p>
              <div className="w-[5rem] mb-2">
                <input className="bg-[#E6E6E6] w-[17.5rem] h-[2.7rem] rounded-[4px] p-2 outline-none border-none text-[20px]" type="date" value={pulang} onChange={(e) => setPulang(e.target.value)} />
              </div>
            </div>
          )}
        </div>
        <Link href="/Citilink">
          <div className="lanjut flex justify-center items-center ms-[5.5rem] mt-2">
            <button className="bg-[#C0C0C0] w-[15rem] h-[2.5rem] rounded-[3px] text-[#495464] font-lexend font-black hover:bg-[#abaaaa]">Lanjut Bayar</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Pesawat_Tiket;
