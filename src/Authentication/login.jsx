import React from "react";
import "../App.css";
const login = () => {
  return (
    <div>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default login;
