import React, { useState, FC } from "react";
import "./Registration.scss"

type UserProfile = {
  email?: string;
  password?: string;
  gender?: string;
  country?: string;
};

export const Registration: FC<UserProfile> = () => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [number, setNumber] = useState<number | "">("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <label>
        <input
          type="radio"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
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
        Country:
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
<option value="">Odaberi zemlju</option>
          <option value="cro">Hrvatska</option>
          <option value="srb">Srbija</option>
          <option value="hrc">Hercegovina</option>
          <option value="usa">Amerika</option>
        </select>
      </label>

    </div>
  );
};

