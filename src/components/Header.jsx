import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";

export default function Header() {
  const { handleAddCard, handleSortCards } = useContext(TaskContext);

  return (
    <header className=" w-full h-16 flex items-center gap-6 px-6 border-b border-gray-500">
      <button className=" border border-gray-500 px-6 py-1.5 rounded-sm hover:border-blue-600 hover:text-blue-600 transition-all" onClick={handleAddCard}>
        Add Card
      </button>
      <button className=" border border-gray-500 px-6 py-1.5 rounded-sm hover:border-blue-600 hover:text-blue-600 transition-all" onClick={handleSortCards}>
        Sort Cards
      </button>
    </header>
  );
}
