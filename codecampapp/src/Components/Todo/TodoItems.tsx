import React from "react";
import "./Todo.scss"

interface TodoItemProps {
  task: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return <li>{task}</li>;
};