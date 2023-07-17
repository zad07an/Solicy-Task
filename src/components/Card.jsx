import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { TaskContext } from "../context/TaskProvider";

const Card = ({ card }) => {
  const { handleDeleteCard } = useContext(TaskContext);

  return (
    <div className=" relative h-60 flex items-center justify-center border border-gray-500 rounded-md">
      <button className=" absolute top-2 right-2 text-2xl text-red-500 hover:text-red-700" onClick={() => handleDeleteCard(card?.id)}>
        <IoClose />
      </button>
      <p className=" text-xl font-semibold">{card?.id}</p>
    </div>
  );
};

export default Card;
