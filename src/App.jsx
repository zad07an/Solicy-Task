import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";

export default function App() {
  return (
    <div className=" w-full grid grid-cols-[3fr_1fr]">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
      <Instructions />
    </div>
  );
}
