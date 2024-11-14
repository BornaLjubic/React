
import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    
    const storedUserProfile = localStorage.getItem("userProfile");
    const userProfile = storedUserProfile ? JSON.parse(storedUserProfile) : null;
  
    
    if (userProfile && userProfile.email === email && userProfile.password === password) {
      alert("Uspješno prijavljeni!");
      navigate("/welcomepage");  
    } else {
      alert("Email ili zaporuka nije točna!"); 
    }
  };
   
  
return (
    <div className="login-form">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/homepage" )}>Izađi</button>
      
    </div>
  );
};