import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss"; 

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  
  const storedUser = localStorage.getItem("userProfile");
  const email = storedUser ? JSON.parse(storedUser).email : null;

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    navigate("/"); 
  };

  return (
    <nav className="navbar">
   {email && <div className="navbar__email">Email:
     {email}</div>}
      {email && (
        <button className="navbar__logout" onClick={handleLogout}>
          Odjava
        </button>
      )}
    </nav>
  );
};