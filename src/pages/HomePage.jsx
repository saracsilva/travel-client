import React from "react";
import travelers from "../assets/travelers.svg";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3  ">
      <div className=" col-span-1">
        <img src={travelers} alt="Two travelers" />
      </div>
      <div className=" col-span-2 flex items-center text-center flex-col">
        <div className=" bg-light-pink w-4/5 flex flex-col items-center justify-center">
          {" "}
          <h1 className=" text-6xl font-kronaOne">Plan your next trip!</h1>
          <p className=" font-thin">Let’s do this!</p>
        </div>
      </div>
    </div>
  );
}
