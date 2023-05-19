import { useState, useEffect } from "react";
import Moon from "./assets/images/icon-moon.svg";
import Sun from "./assets/images/icon-sun.svg";
import TodoIcon from "./assets/images/TODO.svg";
import Todo from "/src/components/Todo.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(inputValue);
    setInputValue("");
  };

  const addTodo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false };
    setToDos([...todos, newTodo]);
    console.log([...todos, newTodo]);
  };

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  // const addTodo = (todo) => {
  //   setToDos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  //   console.log(todos);
  // };

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

  return (
    <>
      <div className=" flex flex-col mx-6 gap-y-2 xl:w-140  ">
        <div className=" flex items-center pt-12 pb-10 justify-between  ">
          <img src={TodoIcon} alt="Logo" />
          <img
            src={theme === "dark" ? Sun : Moon}
            alt="Moon-icon"
            onClick={handleThemeSwitch}
          />
        </div>
        <form
          className=" flex items-center bg-white gap-x-3 rounded-md pt-4 pb-4 pl-5 "
          style={{ boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) " }}
          onSubmit={handleSubmit}
        >
          <input
            type="checkbox"
            className=" appearance-none w-5 h-5 rounded-full border border-solid lightBordColor dark:border-darkBordColor "
          />
          <input
            className="outline-none text-md w-full pr-5 tracking-tighter leading-3 placeholder-lightPlaceColor text-lightTypeColor dark:bg-darkBackColor dark:text-darkPlaceColor "
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create a new todo..."
          />
        </form>

        <div
          className=" flex flex-col rounded-md overflow-hidden "
          style={{
            boxShadow: "0px 35px 50px -15px rgba(194, 195, 214, 0.5) ",
          }}
        >
          {todos.map((todo, index) => (
            <Todo task={todo} key={index} />
          ))}

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
