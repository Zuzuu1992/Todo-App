import React from "react";
import Check from "../assets/images/icon-check.svg";
import Cross from "../assets/images/icon-cross.svg";

export default function Todo({ task, toggleTodo, deleteTodo, dark }) {
  const handleTodoClick = () => {
    toggleTodo(task.id);
  };
  const handleCrossClick = () => {
    deleteTodo(task.id);
  };

  return (
    <>
      <hr
        className={`${
          dark ? "border-[#E3E4F1]" : "border-[#393A4B]"
        } xs:hidden desktop:block`}
      />
      <div
        className={` ${
          dark ? "bg-white" : "bg-darkBoxColor"
        } flex items-center justify-between gap-x-3 pt-4 pb-4 pl-5 pr-5 relative cursor-pointer`}
      >
        <div className="flex items-center gap-x-3">
          <label
            className={`checkbox-container relative ${
              task.active ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={task.active}
              onChange={handleTodoClick}
              className={` ${
                dark
                  ? " border border-solid border-lightBordColor"
                  : " border border-solid border-lightTypeColor"
              } form-checkbox h-5 w-5 appearance-none rounded-full border border-solid cursor-pointer transition-all duration-300 hover:border-purple-500 ${
                !task.active
                  ? "bg-gradient-to-tr from-cyan-400 to-purple-600"
                  : ""
              }`}
            />
            {!task.active && (
              <img
                src={Check}
                className="w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2"
                alt="Check Icon"
              />
            )}
          </label>
          <p
            className={`text-md desktop:text-lg flex-1 break-all ${
              !task.active ? "line-through" : ""
            } ${
              task.active && dark
                ? "text-[#494C6B]"
                : task.active && !dark
                ? "text-[#C8CBE7]"
                : !task.active && dark
                ? "text-[#D1D2DA]"
                : !task.active && !dark
                ? "text-[#4D5067]"
                : ""
            }`}
          >
            {task.task}
          </p>
        </div>
        <img
          src={Cross}
          className={`w-4 h-4 cursor-pointer ml-4 ${
            task.active ? "invisible" : ""
          }`}
          alt="Cross Icon"
          onClick={handleCrossClick}
        />
      </div>
      <hr
        className={`${
          dark ? "border-[#E3E4F1]" : "border-[#393A4B]"
        } desktop:hidden`}
      />
    </>
  );
}
