import React from "react";
import travelers from "../assets/travelers.svg";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 py-10 justify-center h-full">
      <div className=" col-span-1 pl-10 flex flex-col items-center justify-center text-4xl ">
        <img
          src={travelers}
          alt="Two travelers"
          className=" flex flex-col  items-center justify-center w-3/4  pb-10"
        />
        <p className=" font-thin ">Unleash your wanderlust</p>
        <p className=" font-kronaOne ">
          and <span className=" bg-light-pink/25 pr-5 "> boldly explore</span>{" "}
        </p>
        <p className="font-thin ">new frontiers in travel!</p>
      </div>
      <div className=" col-span-2 flex items-center text-center flex-col">
        <div className=" bg-light-pink w-4/5 flex flex-col items-center justify-center rounded-[20px] h-full">
          {" "}
          <h1 className=" text-6xl font-kronaOne">Plan your next trip!</h1>
          <p className=" font-thin">Let’s do this!</p>
        </div>
      </div>
    </div>
  );
}
