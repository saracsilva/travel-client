import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="grid grid-cols-6 w-[1600px]">
      {" "}
      <Link to="/" className="col-span-2 px-10  py-2  ">
        <img src={logo} alt="" className=" w-28  " />
      </Link>
      <Link
        to="/about"
        className="col-span-4  flex flex-row-reverse items-center px-10"
      >
        <p className="  text-lg tex font-light"> about</p>
      </Link>
    </div>
  );
}
