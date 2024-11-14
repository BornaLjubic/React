
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleNavigateToTodo = () => {
    navigate("/todo-list");
  };

  return (
    <div className="home-page">
      <p></p>
      <button onClick={() => navigate("/registration")}>Register</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/todolist" )}>Go to Todo List</button>
    </div>
  );
};