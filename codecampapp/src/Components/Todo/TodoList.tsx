import React, { useState } from "react";
import { TodoItem } from "./TodoItems";
import { useNavigate } from "react-router-dom";
import "./Todo.scss";

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const addTask = () => {
    if (input && !tasks.includes(input)) {
      setTasks([...tasks, input]);
      setInput(""); 
      navigate(`/kategorija/${input}`); 
    } else {
      alert("Zadatak s istim nazivom već postoji ili je unos prazan.");
    }
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Dodaj zadatak"
      />
      <button onClick={addTask}>Dodaj</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};