import React from "react";
import travelers from "../assets/travelers.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid grid-cols-3 py-28 pt justify-center items-center place-items-stretch justify-items-center h-[full] w-[1600px]">
      {/* Travelers Image and Text */}
      <div className=" col-span-1 px-10 flex flex-col items-center justify-center text-4xl ">
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
      <div className=" col-span-2 flex items-center justify-center w-full px-10">
        <div className="grid grid-rows-5   w-full  bg-light-pink/25  rounded-[20px] h-full items-center justify-center relative z-0 ">
          <span className=" row-span-1 bg-purple w-full  h-9 flex self-start  rounded-t-[20px] z-10 absolute inset-0"></span>{" "}
          <div className=" row-span-4 row-start-2 row-end-5 flex flex-col px-10 pt-20  items-center  justify-center  ">
            <h1 className=" text-6xl font-kronaOne">Plan your next trip!</h1>
            <p className=" font-thin text-4xl pb-28">Let’s do this!</p>
            <Link to="/signup">
              <Button
                text={"Signup"}
                background={"bg-purple"}
                color={"text-highlighter-green"}
              />
            </Link>
            <Link to="/login">
              <Button
                text={"Login"}
                border={true}
                background="bg-white"
                color={"text-purple"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
