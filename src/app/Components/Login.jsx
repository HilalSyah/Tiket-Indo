import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const back = useNavigate();

    const gotoBack = () => {
        back('/')
    }

  return (
    <div className="login bg-bgLogin min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="posisi flex justify-between">
        <div className="back p-[5rem]">
          <GoArrowLeft onClick={gotoBack} size={30} color="white" />
        </div>
        <div className="loginnya w-[500px] bg-[#FDFDFD] h-[822px]">
          <div className="judul p-10">
            <p className="text-[40px] font-jockey ">
              Tiket <span className="text-red-600">Indonesia</span>
            </p>
          </div>
          <div className="isi p-10">
            <p className="text-2xl font-poppins font-semibold text-[#2C3E50]">Senang bertemu dengan mu lagi</p>
            <div className="userpas flex flex-col gap-5 mt-10">
              <div className="username">
                <p className=" ms-3 text-[#2C3E50]">Login</p>
                <input className=" mt-2 w-[400px] h-[2.8rem] p-3 rounded-[5px] outline-none border-none bg-slate-200" type="text" placeholder="Email atau No Telpon" />
              </div>
              <div className="username">
                <p className=" ms-3 text-[#2C3E50]">Password</p>
                <input className=" mt-2 w-[400px] h-[2.8rem] p-3 rounded-[5px] outline-none border-none bg-slate-200" type="password" placeholder="Email atau No Telpon" />
              </div>
            </div>
            <div className="ingatdanlupa flex items-center justify-between">
              <div className="p1">
                <div className="p-7 mb-3 transition-all duration-500 w-[15rem] h-[3rem] justify-center items-center">
                  <div className="posisi flex gap-[2rem]">
                    <label htmlFor="check" className="flex bg-gray-400 cursor-pointer relative w-10 h-5 rounded-full border-[1px] border-white p-[2.5px] transition-all duration-500 ">
                      <input type="checkbox" className="sr-only peer" id="check" />
                      <span className="w-[13.5px] h-[13.5px] bg-white absolute rounded-full left-[3px] transition-all duration-500 peer-checked:left-[22px] peer-checked:bg-black"></span>
                    </label>
                    <p className="text-center font-lexend">Ingat Saya ?</p>
                  </div>
                </div>
              </div>
              <div className="p2 me-[2rem] mt-3">
                <button className="text-[#007AFF] text-sm">Luppas Pasword?</button>
              </div>
            </div>

            <div className="masukandggl mt-7">
              <div className="masuk">
                <button className="w-[25rem] h-[2.8rem] rounded-[6px] bg-[#526D82] font-bold text-white">Masuk</button>
              </div>
              <div className="garis relative w-[25rem] text-center flex items-center justify-center mt-5">
                <hr className="border-t border-gray-300 flex-grow" />
                <span className="bg-[#FDFDFD] px-4 text-gray-600 relative z-10">atau</span>
                <hr className="border-t border-gray-300 flex-grow" />
              </div>
              <div className="ggl mt-7">
                <button className="w-[25rem] h-[2.8rem] rounded-[6px] bg-[#27374D] text-[12px] text-white flex justify-center items-center gap-2">
                  <img src="/Assets/Icons/google.png" alt="" width={25} />
                  atau masuk dengan Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
