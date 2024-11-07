import React, { FC, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Registration } from "./Components/Registration";
import { HomePage } from "./Components/HomePage";
import { Login } from "./Components/Login";
import { WelcomePage } from "./Components/WelcomePage";

export const App: FC = () => {

  

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

