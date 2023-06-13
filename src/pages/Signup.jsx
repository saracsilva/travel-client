import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("ttp://localhost:5005/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const parsed = response.json();
      if (parsed.status === 201) {
        navigate(`/login`);
      } else {
        setErrorMessage(parsed.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div>
      <h1 className=" text-3xl font-kronaOne py-9">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <label className="py-2">First Name*</label>
        <input
          className="placeholder:italic border border-slate-300 rounded-3xl py-1 pl-9 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm"
          name="firstName"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
          type="text"
          placeholder="First Name"
        />
        <label className="py-2">Last Name*</label>
        <input
          className="placeholder:italic border border-slate-300 rounded-3xl py-1 pl-9 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm"
          name="lastName"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
          type="text"
          placeholder="Last Name"
        />
        <label className="py-2">Email*</label>
        <input
          className="placeholder:italic border border-slate-300 rounded-3xl py-1 pl-9 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          placeholder="Email"
        />
        <label className="py-2">Password*</label>
        <input
          className="placeholder:italic border border-slate-300 rounded-3xl py-1 pl-9 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <Button
          text={"Signup"}
          background={"bg-purple"}
          color={"text-highlighter-green"}
        />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Signup;
