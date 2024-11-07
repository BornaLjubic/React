import React, { useState, FC } from "react";
import "./HomePage.scss"
import { Route, useNavigate } from "react-router-dom";

type UserProfile = {
  email?: string;
  password?: string;
  gender?: string;
  country?: string;
};

export const HomePage: FC = () => {

const navigate= useNavigate()

  return (
    <div className="home-page">
      <button onClick={()=>navigate("./register")} >Register</button>
    </div>
  );
};
