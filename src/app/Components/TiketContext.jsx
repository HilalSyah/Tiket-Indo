// TiketContext.js
import React, { createContext, useState, useContext } from "react";

const TiketContext = createContext();

export const TiketProvider = ({ children }) => {
  const [data, setData] = useState({
    dari: "",
    ke: "",
    tanggalPergi: "",
    tanggalPulang: "",
    jenisPesawat: "",
  });

  return <TiketContext.Provider value={{ data, setData }}>{children}</TiketContext.Provider>;
};

export const useTiket = () => useContext(TiketContext);
