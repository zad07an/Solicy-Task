import React, { createContext, useState } from "react";
import generateUniqueNumber from "../utils/generateUniqueNumber";
import bubbleSort from "../utils/bubbleSort";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => setCards([...cards, { id: generateUniqueNumber() }]);
  const handleDeleteCard = id => setCards(cards.filter(card => card.id !== id));
  const handleSortCards = () => setCards(bubbleSort([...cards]));

  const values = { handleAddCard, handleDeleteCard, handleSortCards, cards };

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
}
