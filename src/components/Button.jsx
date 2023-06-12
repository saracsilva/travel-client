import React from "react";
import { Link } from "react-router-dom";

function Button({ border = false, background, text, color }) {
  return (
    <button
      className={` shadow-3xl w-[300px] mb-3 h-10 rounded-3xl  ${
        border ? "border-2 border-purple " : ""
      } ${background}    hover:bg-highlighter-green transition-[background] ease-out duration-300 hover:border-0`}
    >
      {" "}
      <Link to={`/${text}`} className={`${color}  hover:text-purple  `}>
        <p>{text}</p>
      </Link>
    </button>
  );
}

export default Button;
