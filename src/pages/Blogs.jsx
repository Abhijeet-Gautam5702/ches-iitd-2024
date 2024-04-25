import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start pt-[6rem]">
      <Header onHome={false} />
      <>Blog Page</>
      <Footer/>
    </div>
  );
}
