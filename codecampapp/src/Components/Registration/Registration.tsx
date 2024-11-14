import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";

export const Registration: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [number, setNumber] = useState<number | "">("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleRegister = () => {
    const userProfile = { name, gender, number, email, password, country };

    console.log(userProfile);
    
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    navigate("/login");
  };

  return (
    <div className="registration-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          placeholder="email"
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

      <label>
        Number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </label>

      <label>Gender:</label>
      <div className="gender-options">
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      <label>
        Country:
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option value="">Select a country</option>
          <option value="cro">Croatia</option>
          <option value="srb">Serbia</option>
          <option value="hrc">Herzegovina</option>
          <option value="usa">USA</option>
        </select>
      </label>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};