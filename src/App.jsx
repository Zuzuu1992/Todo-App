import { useState, useEffect } from "react";
import Moon from "./assets/images/icon-moon.svg";
import Sun from "./assets/images/icon-sun.svg";
import Todo from "./assets/images/TODO.svg";
import Check from "./assets/images/icon-check.svg";
import Cross from "./assets/images/icon-cross.svg";

function App() {
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      // e.target.value;
      e.target.value = "";
    }
  };

  return (
    <>
      <div className=" flex flex-col mx-6 gap-y-2 xl:w-140  ">
        <div className=" flex items-center pt-12 pb-10 justify-between  ">
          <img src={Todo} alt="Logo" />
          <img
            src={theme === "dark" ? Sun : Moon}
            alt="Moon-icon"
            onClick={handleThemeSwitch}
          />
        </div>
        <form
          className=" flex items-center bg-white gap-x-3 rounded-md pt-4 pb-4 pl-5 "
          style={{ boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) " }}
        >
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor dark:border-darkBordColor "
          />
          <input
            className="outline-none text-md w-full pr-5 tracking-tighter leading-3 placeholder-lightPlaceColor text-lightTypeColor dark:bg-darkBackColor dark:text-darkPlaceColor "
            type="text"
            onKeyDown={handleKey}
            placeholder="Create a new todo..."
          />
        </form>
        <div
          className=" flex flex-col rounded-md overflow-hidden hidden "
          style={{
            boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) ",
          }}
        >
          <div className=" flex items-center justify-between bg-white gap-x-3  pt-4 pb-4 pl-5  pr-5 relative ">
            <div className=" flex item gap-x-3  ">
              <input
                type="checkbox"
                className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor bg-gradient-to-tr from-cyan-400 to-purple-600  "
              />
              <img src={Check} className=" absolute top-5 left-6 " />
              <p className=" "></p>
            </div>
            <img src={Cross} className="  w-4 h-4 " />
          </div>
          <hr />
          <div className=" flex items-center justify-between bg-white gap-x-3  pt-4 pb-4 pl-5  pr-5 dark:bg-darkBackColor ">
            <p className=" text-lightPlaceColor text-md dark:text-darkPlaceColor ">
              items left
            </p>
            <p className=" text-lightPlaceColor text-md dark:text-darkPlaceColor ">
              Clear Completed
            </p>
          </div>
        </div>
        <div
          className=" flex items-center justify-center  bg-white rounded-md pt-4 pb-4 gap-x-5 text-base "
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
