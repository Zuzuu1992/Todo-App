import React from "react";
import Check from "../assets/images/icon-check.svg";
import Cross from "../assets/images/icon-cross.svg";

export default function Todo({ task, toggleTodo, deleteTodo }) {
  const handleTodoClick = () => {
    toggleTodo(task.id);
  };

  const handleCrossClick = () => {
    deleteTodo(task.id);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-white gap-x-3 pt-4 pb-4 pl-5 pr-5 relative">
        <div className="flex items-center gap-x-3">
          <label
            className={`checkbox-container relative ${
              task.complete ? "completed" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={task.complete}
              onChange={handleTodoClick}
              className={`form-checkbox h-5 w-5 appearance-none rounded-full border border-solid lightBordColor ${
                task.complete
                  ? "bg-gradient-to-tr from-cyan-400 to-purple-600"
                  : ""
              }`}
            />
            {task.complete && (
              <img
                src={Check}
                className="w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2"
                alt="Check Icon"
              />
            )}
          </label>
          <p className={`text-md ${task.complete ? "line-through" : ""}`}>
            {task.task}
          </p>
        </div>
        <img
          src={Cross}
          className="w-4 h-4"
          alt="Cross Icon"
          onClick={handleCrossClick}
        />
      </div>
      <hr />
    </>
  );
}
