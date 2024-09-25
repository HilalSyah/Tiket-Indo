"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  const GoHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer min-h-[60vh] bg-[#F0F8FF] flex p-[5rem]">
      <div className="footer-posisi flex flex-col gap-[7.5rem]">
        <div className="posisi flex gap-[7rem]">
          <div className="judul-web">
            <p className="font-jockey text-[40px]">
              Tiket <span className="text-red-700">Indonesia</span>
            </p>
          </div>
          <div className="learn-more font-Abeeze mt-6 flex flex-col gap-3">
            <p className="font-Abeeze text-[18px]">Learn More</p>
            <div className="isi text-[14px] flex flex-col gap-3">
              <p>About TiketIND</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="tiket font-Abeeze mt-6 flex flex-col gap-3 text-[18px]">
            <p>Ticket</p>
            <div className="isi text-[14px]">
              <p>Tickets</p>
            </div>
          </div>
          <div className="contact-us font-Abeeze font-medium text-[18px] mt-6">
            <div className="isi text-[14px] flex flex-col gap-4">
              <p>Contact Us</p>
              <p>
                Ticket Office: <span className="font-bold">123-456-789</span>
              </p>
            </div>
          </div>
          <div className="socia mt-6 flex flex-col gap-3">
            <p className="font-Abeeze font-bold">Social</p>
            <div className="isi flex items-center justify-center gap-6">
              <FaFacebookF />
              <RiInstagramFill />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
          <div className="gorowup flex justify-center items-center mt-[8rem]">
            <div className="bg-[#9DB2BF] w-[35px] h-[35px] flex justify-center items-center rounded-[5px] hover:bg-opacity-80">
              <GoArrowUp size={20} strokeWidth={1} onClick={GoHome} />
            </div>
          </div>
        </div>
        <div className="footer-isi ms-[2.5rem]">
          <footer className="border-t border-gray-300 bg-[#F0F8FF] py-4 w-[80rem]">
            <div className="container mx-auto text-center">
              <p className="text-sm text-gray-600">© 2024 Your Company. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
