import { useState } from "react";
import CheckMark from "./assets/images/icon-check.svg";
import Moon from "./assets/images/icon-moon.svg";
import Todo from "./assets/images/TODO.svg";

function App() {
  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <>
      <div className=" flex flex-col mx-6">
        <div className=" flex items-center pt-12 pb-10 justify-between ">
          <img src={Todo} />
          <img src={Moon} />
        </div>
        <div className=" flex items-center bg-white gap-x-3 rounded-md pt-4 pb-4 pl-5">
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor"
          />
          <input
            className="outline-none text-sm tracking-tighter leading-3 placeholder-lightPlaceColor text-lightTypeColor"
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Create a new todo..."
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
