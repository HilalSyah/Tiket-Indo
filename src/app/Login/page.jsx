"use client";

import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const router2 = useRouter();

  const validateForm = () => {
    let formErrors = {};
    if (!email) formErrors.email = "Email harus diisi";
    if (!password) formErrors.password = "Password harus diisi";
    return formErrors;
  };

  const masuk = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setShowNotification(true);
      setAnimateOut(false);

      setTimeout(() => {
        setAnimateOut(true);
      }, 3000);

      setTimeout(() => {
        setShowNotification(false);
        router2.push("/"); // Pindah ke route "/"
      }, 3500);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="login bg-bgLogin min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="posisi flex justify-between">
        <Link href="/">
          <div className="back p-[5rem]">
            <GoArrowLeft size={30} color="white" />
          </div>
        </Link>
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
                <p className="ms-3 text-[#2C3E50]">Login</p>
                <input
                  className="mt-2 w-[400px] h-[2.8rem] p-3 rounded-[5px] outline-none border-none bg-slate-200"
                  type="text"
                  placeholder="Email atau No Telpon"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                />
                {errors.email && <p className="text-red-500 ms-2">{errors.email}</p>}
              </div>
              <div className="username">
                <p className="ms-3 text-[#2C3E50]">Password</p>
                <input
                  className="mt-2 w-[400px] h-[2.8rem] p-3 rounded-[5px] outline-none border-none bg-slate-200"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
                  }}
                />
                {errors.password && <p className="text-red-500 ms-2">{errors.password}</p>}
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
                <button className="text-[#007AFF] text-sm">Lupa Password?</button>
              </div>
            </div>

            <div className="masukandggl mt-7">
              <div className="masuk">
                <button onClick={masuk} className="w-[25rem] h-[2.8rem] rounded-[6px] bg-[#526D82] font-bold text-white">
                  Masuk
                </button>
              </div>
              <div className="garis relative w-[25rem] text-center flex items-center justify-center mt-5">
                <hr className="border-t border-gray-300 flex-grow" />
                <span className="bg-[#FDFDFD] px-4 text-gray-600 relative z-10">atau</span>
                <hr className="border-t border-gray-300 flex-grow" />
              </div>
              <div className="ggl mt-7">
                <Link href="/">
                  <button className="w-[25rem] h-[2.8rem] rounded-[6px] bg-[#27374D] text-[12px] text-white flex justify-center items-center gap-2">
                    <img src="/Assets/Icons/google.png" alt="" width={25} />
                    atau masuk dengan Google
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNotification && (
        <div
          className={`fixed right-0 top-[10%] bg-[#2C3E50] text-white p-3 rounded-md shadow-lg ${
            animateOut ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          Login berhasil!
        </div>
      )}
    </div>
  );
};

export default Login;
