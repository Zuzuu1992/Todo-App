import { useState, useEffect } from "react";
import Moon from "./assets/images/icon-moon.svg";
import Sun from "./assets/images/icon-sun.svg";
import TodoIcon from "./assets/images/TODO.svg";
import Todo from "/src/components/Todo.jsx";
import { DesktopDiv } from "./components/DesktopDiv";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState("All");
  const completedTodos = todos.filter((todo) => todo.complete);
  const activeTodos = todos.filter((todo) => !todo.complete);
  const [dark, setDark] = useState(false);
  const filterArr =
    filter === "All"
      ? todos
      : filter === "Active"
      ? activeTodos
      : completedTodos;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }

    addTodo(inputValue);
    setInputValue("");
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(
        "https://todo-app-backend-yqqa.onrender.com/api/todo",
        {
          task: todo,
          active: true,
        }
      );
      setToDos([...todos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const response = await axios.get(
          "https://todo-app-backend-yqqa.onrender.com/api/todo"
        );
        setToDos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllTodos();
  }, []);

  const toggleTodo = async (id) => {
    try {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });

      await axios.put(
        `https://todo-app-backend-yqqa.onrender.com/api/todo/${id}`
      );

      setToDos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://todo-app-backend-yqqa.onrender.com/api/todo/${id}`
      );
      setToDos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const clearCompletedTodos = async () => {
    try {
      await axios.delete(
        `https://todo-app-backend-yqqa.onrender.com/api/deletecompleted`
      );
      const response = await axios.get(
        "https://todo-app-backend-yqqa.onrender.com/api/todo"
      );
      setToDos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={` place-content-center min-h-screen bg-no-repeat bg-contain ${
        dark
          ? 'bg-[url("./assets/images/bg-mobile-light.jpg")] desktop:bg-[url("./assets/images/bg-desktop-light.jpg")] bg-white'
          : 'bg-[url("./assets/images/bg-mobile-dark.jpg")] desktop:bg-[url("./assets/images/bg-desktop-dark.jpg")] bg-darkBackColor'
      }`}
    >
      <div className="  flex flex-col mx-6 gap-y-3 desktop:w-[540px] desktop:m-auto desktop:pt-[70px] ">
        <div className=" flex items-center pt-12 pb-10 justify-between  ">
          <img
            src={TodoIcon}
            alt="Logo"
            className="desktop:h-[40px] desktop:w-[167px]"
          />
          <img
            src={`${dark ? Moon : Sun}`}
            onClick={() => setDark(!dark)}
            className=" cursor-pointer"
          />
        </div>

        <form
          className={`${
            dark ? "bg-white" : "bg-darkBoxColor"
          } flex items-center gap-x-3 rounded-md pt-4 pb-4 pl-5 desktop:pt-5 desktop:pb-5 `}
          style={{
            boxShadow: !dark
              ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
              : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="checkbox"
            className={`${
              dark
                ? " border border-solid border-lightBordColor"
                : " border border-solid border-lightTypeColor"
            } appearance-none w-5 h-5 rounded-full cursor-pointer hover:border-allColor`}
          />

          <input
            className={`${
              dark
                ? "bg-white placeholder-lightPlaceColor text-lightTypeColor "
                : "bg-darkBoxColor placeholder-[#767992] text-[#C8CBE7]"
            } outline-none text-md w-full pr-5 tracking-tighter leading-3 caret-allColor desktop:text-lg `}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Create a new todo..."
          />
        </form>

        <div
          className=" flex flex-col rounded-md overflow-hidden text-black "
          style={{
            boxShadow: !dark
              ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
              : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
          }}
        >
          {filterArr.map((todo, index) => (
            <Todo
              task={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={index}
              dark={dark}
            />
          ))}

          {/* <hr /> */}
          <div
            className={` ${
              dark ? "bg-white" : "bg-darkBoxColor"
            } flex items-center justify-between gap-x-3  pt-4 pb-4 pl-5  pr-5 desktop:hidden `}
          >
            <p
              className={`${
                dark ? "text-[#9495A5]" : "text-[#5B5E7E]"
              } text-md cursor-pointer`}
            >
              {filter === "All"
                ? `${activeTodos.length} ${
                    activeTodos.length === 1 ? "item" : "items"
                  } left`
                : filter === "Active"
                ? `${activeTodos.length} ${
                    activeTodos.length === 1 ? "item" : "items"
                  } left`
                : `${completedTodos.length} ${
                    completedTodos.length === 1 ? "item" : "items"
                  } completed`}
            </p>
            <p
              className={` ${
                dark ? "text-[#9495A5]" : "text-[#5B5E7E]"
              } text-md cursor-pointer `}
              onClick={clearCompletedTodos}
            >
              Clear Completed
            </p>
          </div>
        </div>
        <div
          className={` ${
            dark ? "bg-white" : "bg-darkBoxColor"
          } flex items-center justify-center rounded-md pt-4 pb-4 gap-x-5 text-base desktop:hidden`}
          style={{
            boxShadow: !dark
              ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
              : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
          }}
        >
          <p
            onClick={() => setFilter("All")}
            className={`${
              filter === "All" && dark
                ? "text-allColor"
                : filter === "All" && !dark
                ? "text-allColor"
                : filter !== "All" && dark
                ? "text-lightPlaceColor hover:text-[#494C6B] "
                : "text-justColor hover:text-[#E3E4F1]"
            } font-bold cursor-pointer transition-all duration-300`}
          >
            All
          </p>
          <p
            onClick={() => setFilter("Active")}
            className={`${
              filter === "Active" && dark
                ? "text-allColor"
                : filter === "Active" && !dark
                ? "text-allColor"
                : filter !== "Active" && dark
                ? "text-lightPlaceColor hover:text-[#494C6B]"
                : "text-justColor hover:text-[#E3E4F1]"
            } font-bold cursor-pointer transition-all duration-300`}
          >
            Active
          </p>
          <p
            onClick={() => setFilter("Completed")}
            className={`${
              filter === "Completed" && dark
                ? "text-allColor"
                : filter === "Completed" && !dark
                ? "text-allColor"
                : filter !== "Completed" && dark
                ? "text-lightPlaceColor hover:text-[#494C6B]"
                : "text-justColor hover:text-[#E3E4F1]"
            } font-bold cursor-pointer transition-all duration-300`}
          >
            Completed
          </p>
        </div>
        <DesktopDiv
          filter={filter}
          completedTodos={completedTodos}
          dark={dark}
          clearCompletedTodos={clearCompletedTodos}
          setFilter={setFilter}
          activeTodos={activeTodos}
        />
        <div className=" flex align-center justify-center">
          <p
            className={` mt-10 ${
              dark ? " text-lightPlaceColor" : "text-[#5B5E7E]"
            }`}
          >
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
