"use client";

import Image from "next/image";
import { productPesawat } from "../lib/Garuda";
import { useEffect } from "react";
import CheckoutPesawat2 from "../Components/CheckoutPesawat3";

export default function Home() {
  useEffect(() => {
    
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey = process.env.NEXT_PUBLIC_CLIENT

    const script = document.createElement('script')
    script.src = snapScript
    script.setAttribute('data-client-key', clientKey)
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }

  }, []);

  return (
    <>
      <div className="bg-bgnew min-h-screen">
        <main className="max-w-xl mx-auto sm:p-16">
          <div className="chek border-[2px] h-[35rem] border-slate-400 rounded-[1rem] shadow-md shadow-slate-600 bg-white">
            <div className="flex flex-col">
              <Image src="/pesawat (1).png" alt="Pesawat Gambar" width={250} height={250} objectFit="cover" className="w-full rounded-t-[1rem]" />
              <div className="border border-gray-100 bg-white p-6">
                <h3 className="mt-4 text-lg font-medium text-gray-900">{productPesawat.name}</h3>
                <p className="mt-1.5 text-sm text-gray-700">Rp {productPesawat.price}</p>
                <CheckoutPesawat2 />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
