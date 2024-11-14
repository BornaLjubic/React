 import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Registration } from "./Components/Registration";
import { Navbar } from "./Components/Navbar";
import { HomePage } from "./Components/HomePage";
import { Login } from "./Components/Login";
import { TodoList } from "./Components/Todo";
import { WelcomePage } from "./Components/WelcomePage";
import { Kategorija } from "./Components/Kategorija";


export const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/kategorija/:naziv" element={<Kategorija />} /> {/* Dinamički parametar */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};