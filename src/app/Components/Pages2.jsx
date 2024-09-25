import React from "react";

export const Pages2 = () => {
  return (
    <div className="pages2 min-h-[70vh] flex items-center justify-center flex-col bg-[#D5DEE4]">
      <div className="tiket-icon flex gap-4 justify-start items-end me-[17rem] ">
        <div className="icon">
        <img src="/Assets/Icons/Vector.png" alt="" />
        </div>
        <div className="icon">
        <img src="/Assets/Icons/Vector (1).png" alt="" />
        </div>
        <div className="icon">
        <img src="/Assets/Icons/Vector (2).png" alt="" />
        </div>
        <div className="icon">
        <img src="/Assets/Icons/Vector (3).png" alt="" />
        </div>
      </div>
      <div className="bungkus w-[60rem] bg-[#27374D] h-[25rem] flex items-center justify-center flex-col text-white font-lexend rounded-[4px] shadow-xl shadow-ShadowBlack">
        <div className="data flex gap-[8rem] ">
          <div className="data2 ">
            <p className="font-black">Tiket Keberangkatan</p>
            <input className="bg-[#D9D9D9] w-[23rem] h-9 outline-none p-2 text-xl text-black rounded-[3px] shadow-xl shadow-ShadowBlack" type="text" />
            <p className="font-black mt-[5rem]">Destinasi</p>
            <input className="bg-[#D9D9D9] w-[23rem] h-9 outline-none p-2 text-xl text-black rounded-[3px] shadow-xl shadow-ShadowBlack" type="text" />
          </div>
          <div className="data3">
            <p className="font-black">Tujuan</p>
            <input className="bg-[#D9D9D9] w-[23rem] h-9 outline-none p-2 text-xl text-black rounded-[3px] shadow-xl shadow-ShadowBlack" type="text" />
            <p className="font-black mt-[5rem]">Jenis Trasnportasi</p>
            <input className="bg-[#D9D9D9] w-[23rem] h-9 outline-none p-2 text-xl text-black rounded-[3px] shadow-xl shadow-ShadowBlack" type="text" />
          </div>
        </div>
          <div className="pesan mt-[4rem]">
            <button className="bg-[#9DB2BF] w-[25rem] h-[3rem] rounded-[3px] text-[#495464] font-black text-lg shadow-2xl shadow-[#rgba(0, 0, 0, 0.25)]" type="submit">Cari Pesan</button>
          </div>
      </div>
    </div>
  );
};

export default Pages2;
