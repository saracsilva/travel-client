import React from "react";
import travelers from "../assets/travelers.svg";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 py-10 justify-center h-full">
      {/* Travelers Image and Text */}
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
      {/* Botoes login e signup */}
      <div className=" col-span-2 flex items-center justify-center ">
        <div className="grid grid-rows-2  bg-light-pink/25  rounded-[20px] h-full items-center justify-center ">
          {" "}
          <span className=" row-span-1 bg-purple w-[100%] h-9 flex self-start  rounded-t-[20px] "></span>
          <div className=" row-span-1 flex flex-col px-10  items-center  justify-center  ">
            <h1 className=" text-6xl font-kronaOne">Plan your next trip!</h1>
            <p className=" font-thin text-4xl pb-28">Let’s do this!</p>
            <Button
              text={"Signup"}
              background={"bg-purple"}
              color={"text-highlighter-green"}
            />
            <Button
              text={"Login"}
              border={true}
              background="bg-white"
              color={"text-purple"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
