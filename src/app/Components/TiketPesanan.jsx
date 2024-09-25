import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';

export const TiketPesanan = () => {

  const [data, setData] = useState({
    dari: '',
    ke: '',
    jenis: '',
    pergi: '',
    pulang: '',
    isPP: false
  });

  useEffect(() => {
    const storedData = localStorage.getItem('pesawatTiketData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="tiket bg-bgPesanan bg-cover bg-no-repeat bg-center min-h-screen">
      <Navbar/>
      
      <div className="bungkus w-[1300px] h-[600px] bg-trasnparant ms-[12.5rem] mt-10 p-10">
      <div className="data w-[800px] h-[150px] bg-slate-400">
        <p>Dari : {data.dari}</p>
        <p>ke : {data.ke}</p>
        <p>Pergi : {data.pergi}</p>
        <p>Pulang : {data.pulang}</p>
        <p>jenis : {data.jenis}</p>
      </div>
      </div>
    </div>
  )
}


export default TiketPesanan;