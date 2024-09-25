/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        jockey: ["Jockey One", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
        Abeeze: ["ABeeZee", "sans-serif"],
      },
      backgroundImage: {
        page1: "url('/Assets/Image/BackgroundPage/home screen.png')",
        page4: "url('/Assets/Image/BackgroundPage/Group 258.png')",
        bgTiketKapal: "url('/Assets/Image/BackgroundPage/new-kapal.jpg')",
        bgTiketPesawat: "url('/Assets/Image/BackgroundPage/new-pesawat.png')",
        bgTiketKereta: "url('/Assets/Image/BackgroundPage/new-kereta.jpg')",
        bgTiketBus: "url('/Assets/Image/BackgroundPage/new-bus.jpg')",
        bgPesanan: "url('/Assets/Image/BackgroundPage/pemesanan.png')",
        bgContact: "url('/Assets/Image/BackgroundPage/kontak2.png')",
        bgLogin: "url('/Assets/Image/BackgroundPage/volcano-3779159.jpg')",
        bgWisata: "url('/Assets/Image/BackgroundPage/Background (4).png')",
        bgWisata2: "url('/Assets/Image/BackgroundPage/volcano-with.jpg')",
      },
      colors: {
        ShadowBlack: "rgba(0, 0, 0, 0.25)",
        buttonColor: "rgba(157, 178, 191, 1)",
        ShadowTiket: "rgba(48, 49, 53, 0.16)",
        toggleBg: "rgba(144, 138, 131, 0.38)",
        trasnparant: "rgba(221, 230, 237, 0.6)",
        bgInput: "rgba(221, 230, 237, 0.1)",
        bgnew: "rgba(82, 109, 130, 1)",
      },
    },
  },
  plugins: [],
};
