"use client";

import Image from "next/image";
import { productWisata } from "../lib/Ngurtafur";
import { useEffect } from "react";
import CheckoutWisata3 from "../Components/CheckoutWisata3";
import CheckoutWisata2 from "../Components/CheckoutWisata2";

export default function Home() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;

    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="bg-bgWisata2 bg-cover bg-no-repeat bg-center min-h-screen">
        <main className="max-w-xl mx-auto sm:p-16">
          <div className="chek border-[2px] h-[45rem] border-slate-400 rounded-[1rem] shadow-md shadow-slate-600 bg-white">
            <div className="flex flex-col">
              <Image src="/Gambar7.png" alt="Wisata Gambar" width={250} height={250} objectFit="cover" className="w-full rounded-t-[1rem]" />
              <div className="border border-gray-100 bg-white p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900">{productWisata.name}</h3>
                <p className="mt-1.5 text-sm text-gray-700">Rp {productWisata.price}</p>
                <p className="mt-3 text-sm text-gray-700">Jumlah Tiket</p>
                <CheckoutWisata3 />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
