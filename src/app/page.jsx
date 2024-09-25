import Image from "next/image";
import NavPage from "./Components/NavPage";
import Pages2 from "./Components/Pages2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";
import Page8 from "./Components/Page8";
import Page9 from "./Components/Page9";
import "./globals.css"
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
    <NavPage/>
   <Pages2/>
   <Page3/>
   <Page4/>
   <Page5/>
   <Page6/>
   <Page7/>
   <Page8/>
   <Page9/>
   <Footer/>
    </>
  );
}
