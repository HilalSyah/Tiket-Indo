import Link from "next/link";
import React from "react";

export const Page4 = () => {
  return (
    <div className="merge">
      <div className="page4 bg-[#D5DEE4] min-h-[120vh] bg-no-repeat bg-cover flex justify-center items-center font-lexend flex-col ">
        <div className="position mb-[9rem] items-center justify-center flex flex-col">
          <p>Ide liburan</p>
          <p className="text-2xl">Pantai indah yang bisa kamu kunjungi dengan keluarga/teman</p>
          <div className="jenis-pantai flex items-center justify-center gap-[3rem] mt-[8rem] ms-5">
            <div className="pantai1">
              <img className=" absolute" src="/Assets/Image/GambarWeb/4.png" alt="" />
              <p className="text-2xl relative mt-[13rem] ms-2 font-medium text-[#2C3E50]">Pantai Pink</p>
              <p className="mt-7 text-[11.5px] font-light text-black">
                Pulau Komodo, Kabupaten Manggarai Barat, <br />
                Nusa Tenggara Timur
              </p>
              <div className="rating flex justify-between items-center mt-3">
                <img className=" absolute" src="/Assets/Image/GambarWeb/Group 205.png" alt="" />
                <Link href="/Pink">
                  <button className="ms-[10rem] bg-slate-400 w-[74px] h-[29px] rounded-[3px] hover:bg-slate-300">Pesan</button>
                </Link>
              </div>
            </div>
            <div className="pantai1">
              <img className=" absolute" src="/Assets/Image/GambarWeb/Rectangle 39684.png" alt="" />
              <p className="text-2xl relative mt-[13rem] ms-2 font-medium text-[#2C3E50]">Pantai Derawan</p>
              <p className="mt-7 text-[11.5px] font-light text-[#2C3E50]">
                Pulau Komodo, Kabupaten Manggarai Barat, <br />
                Nusa Tenggara Timur
              </p>
              <div className="rating flex justify-between items-center mt-3">
                <img className=" absolute" src="/Assets/Image/GambarWeb/Group 205.png" alt="" />
                <Link href="/Derawan">
                  <button className="ms-[10rem] bg-slate-400 w-[74px] h-[29px] rounded-[3px] hover:bg-slate-300">Pesan</button>
                </Link>
              </div>
            </div>
            <div className="pantai1">
              <img className=" absolute" src="/Assets/Image/GambarWeb/2.png" alt="" />
              <p className="text-2xl relative mt-[13rem] ms-2 font-medium text-[#2C3E50]">Pantai Ngurtafur</p>
              <p className="mt-7 text-[11.5px] font-light text-[#2C3E50]">
                Pulau Komodo, Kabupaten Manggarai Barat, <br />
                Nusa Tenggara Timur
              </p>
              <div className="rating flex justify-between items-center mt-3">
                <img className=" absolute" src="/Assets/Image/GambarWeb/Group 205.png" alt="" />
                <Link href="/Ngurfatur">
                  <button className="ms-[10rem] bg-slate-400 w-[74px] h-[29px] rounded-[3px] hover:bg-slate-300">Pesan</button>
                </Link>
              </div>
            </div>
            <div className="pantai1">
              <img className=" absolute" src="/Assets/Image/GambarWeb/3.png" alt="" />
              <p className="text-2xl relative mt-[13rem] ms-2 font-medium text-[#2C3E50]">Pantai Ora</p>
              <p className="mt-7 text-[11.5px] font-light text-[#2C3E50]">
                Pulau Komodo, Kabupaten Manggarai Barat, <br />
                Nusa Tenggara Timur
              </p>
              <div className="rating flex justify-between items-center mt-3">
                <img className=" absolute" src="/Assets/Image/GambarWeb/Group 205.png" alt="" />
                <Link href="Ora">
                  <button className="ms-[10rem] bg-slate-400 w-[74px] h-[29px] rounded-[3px] hover:bg-slate-300">Pesan</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page5 min-h-[60vh] flex justify-center items-center flex-col font-lexend gap-[5rem] bg-[#DDE6ED]">
        <p className="text-2xl">Pilih Kendaraan Untuk Berpergian</p>
        <div className="logo-kendaraan flex justify-center items-center text-center gap-[5rem] mb-[3rem]">
          <div className="logo1 flex flex-col gap-5 w-[100px] h-[140px] border-[2px] border-[#9DB2BF] p-3 rounded-[8px] bg-[#9DB2BF] shadow-md shadow-[#526D82]">
            <img src="/Assets/Icons/Vector (4).png" alt="" className="w-auto h-auto" />
            <Link href="/Kereta_Tiket">
            <button className=" underline-offset-1">Kereta</button>
            </Link>
          </div>
          <div className="logo1 flex flex-col gap-5 w-[100px] h-[140px] border-[2px] border-[#9DB2BF] p-3 rounded-[8px] bg-[#9DB2BF] shadow-md shadow-[#526D82]">
            <img src="/Assets/Icons/Vector (5).png" alt="" className="w-auto h-auto" />
            <Link href="/Bus_Tiket">
            <button className=" underline-offset-1">Bus</button>
            </Link>
          </div>
          <div className="logo1 flex flex-col gap-5 w-[100px] h-[140px] border-[2px] border-[#9DB2BF] p-3 rounded-[8px] bg-[#9DB2BF] shadow-md shadow-[#526D82]">
            <img src="/Assets/Icons/Vector (6).png" alt="" className="w-auto h-auto mt-7" />
            <Link href="/Pesawat_Tiket">
            <button className=" underline-offset-1 mt-3">Pesawat</button>
            </Link>
          </div>
          <div className="logo1 flex flex-col gap-5 w-[100px] h-[140px] border-[2px] border-[#9DB2BF] p-3 rounded-[8px] bg-[#9DB2BF] shadow-md shadow-[#526D82]">
            <img src="/Assets/Icons/Vector (7).png" alt="" className="w-auto h-auto mt-1" />
            <Link href="/Kapal_Tiket">
            <button className=" underline-offset-1">Kapal</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
