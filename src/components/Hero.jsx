import React from "react";
// import hero from "../assets/hero.JPG";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bgHeroImage flex flex-col justify-center items-center">
      <div className="h-screen w-full bg-black opacity-65">Overlay</div>
      <div className="absolute flex flex-col justify-center items-center">
        <p className="text-white font-head text-6xl">
          We are <span className="text-accent">ChES</span>
        </p>
        <p className="text-white font-head text-lg">
          From <span className="text-accent">welcome</span> to{" "}
          <span className="text-accent">farewell</span>. We are here for you!
        </p>
      </div>
    </div>
  );
}
