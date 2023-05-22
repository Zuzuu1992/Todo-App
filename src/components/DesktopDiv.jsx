import React from "react";

export function DesktopDiv({
  filter,
  completedTodos,
  dark,
  clearCompletedTodos,
  setFilter,
  activeTodos,
}) {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div
      className={` ${
        dark ? "bg-white" : "bg-darkBoxColor"
      } items-center justify-between rounded-md gap-x-3  pt-5 pb-5 pl-5  pr-5 xs:hidden desktop:block desktop:flex`}
      style={{
        boxShadow: !dark
          ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
          : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
      }}
    >
      <p
        className={`${
          dark
            ? "text-[#9495A5] hover:text-[#494C6B] "
            : "text-[#5B5E7E] hover:text-[#E3E4F1]"
        } text-md cursor-pointer transition-all duration-300 desktop:text-lg`}
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
            } left  `}
      </p>

      <div className="flex align-center justify-center gap-x-5">
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

      <p
        className={` ${
          dark
            ? "text-[#9495A5] hover:text-[#494C6B]"
            : "text-[#5B5E7E] hover:text-[#E3E4F1]"
        } text-md cursor-pointer transition-all duration-300 `}
        onClick={clearCompletedTodos}
      >
        Clear Completed
      </p>
    </div>
  );
}
