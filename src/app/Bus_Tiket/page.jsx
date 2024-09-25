"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import "../globals.css";

export const Bus_Tiket = () => {
  const [isPP, setPP] = useState(false);

  const deteksi = () => {
    setPP((prevState) => !prevState);
  };

  const [dari, setDari] = useState("");
  const [ke, setKe] = useState("");
  const [jenis, setJenis] = useState("");

  return (
    <div className="Kapal_Tiket min-h-screen bg-bgTiketBus bg-no-repeat bg-cover bg-center flex">
      <div className="kelompok1 p-[3rem]">
        <Link href="/">
          <div className="logo-back">
            <GoArrowLeft size={30} color="white" />
          </div>
        </Link>
        <div className="teks font-lexend text-[54px] font-bold text-[#dbdada] p-[5rem]">
          Cek Harga Tiket Bus <br />
          Online Murah dan <br />
          Promo Hari Ini
        </div>
      </div>
      <div className="pesan-tiket bg-trasnparant w-[500px] h-[700px] flex flex-col justify-start items-start mt-[1.5rem] rounded-[10px] font-lexend gap-[2rem] p-[3.5rem] transition-all duration-500">
        <div className="dari">
          <p className="text-2xl font-bold">Dari</p>
          <div className="bg-[#E6E6E6] w-[25rem] h-[2.5rem] rounded-[5px]">
            <select className="bg-[#E6E6E6] w-[24rem] h-[2.5rem] border-none outline-none text text-[20px] ms-2" value={dari} onChange={(e) => setDari(e.target.value)}>
              <option value="" disabled>
                Pilih Kota
              </option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Semarang</option>
              <option value="Jogja">Kudus</option>
              <option value="Surabaya">Magelang</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Surabaya">Bandung</option>
              <option value="Surabaya">Yogyakarta</option>
            </select>
          </div>
        </div>
        <div className="ke">
          <p className="text-2xl font-bold">Ke</p>
          <div className="bg-[#E6E6E6] w-[25rem] h-[2.5rem] rounded-[5px]">
            <select className="bg-[#E6E6E6] w-[24rem] h-[2.5rem] border-none outline-none text-[20px] ms-2" value={ke} onChange={(e) => setKe(e.target.value)}>
              <option value="" disabled>
                Pilih Kota
              </option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Semarang</option>
              <option value="Jogja">Kudus</option>
              <option value="Surabaya">Magelang</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Surabaya">Bandung</option>
              <option value="Surabaya">Yogyakarta</option>
            </select>
          </div>
        </div>
        <div className="tanggal bg-[#344657] w-[24rem] flex flex-col rounded-[10px] p-[1rem]">
          <div className="toggle flex items-center">
            <div className="pp1 ms-[1rem] flex flex-col gap-2 mb-[rem]">
              <p className="text-2xl font-bold text-white">Tanggal Pergi</p>
              <div className="w-[5rem]">
                <input className="bg-[#E6E6E6] w-[17.5rem] h-[2.7rem] rounded-[4px] p-2 outline-none border-none text-[20px]" type="date" />
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
                <input className="bg-[#E6E6E6] w-[17.5rem] h-[2.7rem] rounded-[4px] p-2 outline-none border-none text-[20px]" type="date" />
              </div>
            </div>
          )}
        </div>
        <div className="jenis">
          <p className="text-2xl font-bold">Jenis Bus</p>
          <div className="bg-[#E6E6E6] w-[25rem] h-[2.5rem] rounded-[7px]">
            <select className="bg-[#E6E6E6] w-[24rem] h-[2.5rem] border-none outline-none text-[20px] ms-2" value={jenis} onChange={(e) => setJenis(e.target.value)}>
              <option value="" disabled>
                Pilih jenis Bus
              </option>
              <option value="Haryanto">Haryanto</option>
              <option value="Harapan Jaya">Harapan Jaya</option>
              <option value="Rosalia Indah">Rosalia Indah</option>
              <option value="Handoyo">Handoyo</option>
              <option value="Kramat Djati">Kramat Djati</option>
            </select>
          </div>
        </div>
        <Link href="/NextPaymentBus">
          <div className="lanjut flex justify-center items-center ms-[5.5rem] mt-2">
            <button className="bg-[#C0C0C0] w-[15rem] h-[2.5rem] rounded-[3px] text-[#495464] font-lexend font-black hover:bg-[#abaaaa]">Lanjut Bayar</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Bus_Tiket;
