import { useState } from "react";
import CheckMark from "./assets/images/icon-check.svg";
import Moon from "./assets/images/icon-moon.svg";
import Todo from "./assets/images/TODO.svg";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className=" flex flex-col mx-6 gap-y-2 ">
        <div className=" flex items-center pt-12 pb-10 justify-between  ">
          <img src={Todo} />
          <img src={Moon} />
        </div>
        <div
          className=" flex items-center bg-white gap-x-3 rounded-md pt-4 pb-4 pl-5 "
          style={{ boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) " }}
        >
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor"
          />
          <input
            className="outline-none text-md tracking-tighter leading-3 placeholder-lightPlaceColor text-lightTypeColor"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Create a new todo..."
          />
        </div>
        <div
          className=" flex items-center bg-white gap-x-3 rounded-md pt-4 pb-4 pl-5 "
          style={{ boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) " }}
        >
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor"
          />
          <p></p>
        </div>
        <div
          className=" flex items-center justify-center bg-white rounded-md pt-4 pb-4 gap-x-5 text-base "
          style={{ boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) " }}
        >
          <p className=" text-allColor font-bold">All</p>
          <p className=" text-lightPlaceColor font-bold">Active</p>
          <p className=" text-lightPlaceColor font-bold">Completed</p>
        </div>
        <div className=" flex align-center justify-center">
          <p className=" mt-10 text-lightPlaceColor ">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
