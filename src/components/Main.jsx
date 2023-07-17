import React, { useContext } from "react";
import { TaskContext } from "../context/TaskProvider";
import Card from "./Card";

export default function Main() {
  const { cards } = useContext(TaskContext);

  return (
    <div className=" h-[calc(100vh-128px)] overflow-y-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards?.map(card => {
        return <Card key={card?.id} card={card} />;
      })}
    </div>
  );
}
