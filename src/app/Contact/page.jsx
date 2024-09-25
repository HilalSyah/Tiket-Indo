"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";


export const ContactPage = () => {

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noTelpon, setNoTelpon] = useState("");
  const [pesan, setPesan] = useState("");
  const [errors, setErrors] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!nama) formErrors.nama = "Nama harus diisi";
    if (!email) formErrors.email = "Email harus diisi";
    if (!noTelpon) formErrors.noTelpon = "Nomor telepon harus diisi";
    if (!pesan) formErrors.pesan = "Pesan harus diisi";
    return formErrors;
  };

  const handleSendClick = () => {

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setAnimateOut(false);
      setShowNotification(true);

      setNama("");
      setEmail("");
      setNoTelpon("");
      setPesan("");

      setTimeout(() => {
        setAnimateOut(true);
      }, 3000);

      setTimeout(() => {
        setShowNotification(false);
      }, 3500);
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;

    switch (field) {
      case "nama":
        setNama(value);
        if (errors.nama) setErrors((prev) => ({ ...prev, nama: "" }));
        break;
      case "email":
        setEmail(value);
        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
        break;
      case "noTelpon":
        setNoTelpon(value);
        if (errors.noTelpon) setErrors((prev) => ({ ...prev, noTelpon: "" }));
        break;
      case "pesan":
        setPesan(value);
        if (errors.pesan) setErrors((prev) => ({ ...prev, pesan: "" }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-page bg-bgContact min-h-screen bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <div className="posisi p-[5rem] ms-[15rem]">
        <div className="contact-use bg-trasnparant w-[850px] h-[500px] flex justify-center items-center rounded-[15px] flex-col">
          <p className="font-lexend text-4xl font-semibold">CONTACT US</p>
          <div className="nama">
          <input className="w-[45rem] h-[2.5rem] rounded-[10px] p-5 outline-none border-none mt-3" type="text" placeholder="Nama*" value={nama} onChange={(e)=> handleInputChange(e, "nama")} />
          {errors.nama && <p className="text-red-500 ms-2">{errors.nama}</p>}
          </div>
          <div className="kolom2 flex gap-5 mt-5">
            <div className="email">
            <input className="w-[22rem] h-[2.7rem] rounded-[10px] p-5 outline-none border-none" type="text" placeholder="Email*" value={email}  onChange={(e)=> handleInputChange(e, "email")} />
            {errors.email && <p className="text-red-500 ms-2">{errors.email}</p>}
            </div>
            <div className="telpon">
            <input className="w-[22rem] h-[2.7rem] rounded-[10px] p-5 outline-none border-none" type="text" placeholder="NoTelpon*" value={noTelpon}  onChange={(e)=> handleInputChange(e, "noTelpon")}/>
            {errors.noTelpon && <p className="text-red-500 ms-2">{errors.noTelpon}</p>}
            </div>
          </div>
          <div className="pesan">

          <input className="w-[45rem] h-[9rem] rounded-[10px] pb-[5.5rem] ps-[1rem] pt-2 outline-none border-none mt-[1.5rem] justify-start items-start text-left text-sm" type="Pesan anda*" placeholder="Pesan Anda*" value={pesan}  onChange={(e)=> handleInputChange(e, "pesan")} />
          {errors.pesan && <p className="text-red-500 ms-2">{errors.pesan}</p>}
          </div>
          <button onClick={handleSendClick} className="font-lexend bg-[#27374D] w-[45rem] h-[2.5rem] text-white text-1xl rounded-[10px] mt-5 ">Kirim</button>
        </div>
      </div>
      {showNotification && (
        <div
          className={`fixed right-0 top-[20%] bg-[#2C3E50] text-white p-3 rounded-md shadow-lg ${
            animateOut ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          Pesan anda terkirim
        </div>
      )}
    </div>
  );
};

export default ContactPage;
