import React from "react";
import Check from "../assets/images/icon-check.svg";
import Cross from "../assets/images/icon-cross.svg";

export default function Todo({ task }) {
  return (
    <>
      <div className=" flex items-center justify-between bg-white gap-x-3  pt-4 pb-4 pl-5  pr-5 relative ">
        <div className=" flex item gap-x-3  ">
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor bg-gradient-to-tr from-cyan-400 to-purple-600  "
          />
          <img src={Check} className=" absolute top-5 left-6 " />
          <p className=" ">{task.task}</p>
        </div>
        <img src={Cross} className="  w-4 h-4 " />
      </div>
      <hr />
    </>
  );
}
