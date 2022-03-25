import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = " ";
};

const Join = () => {
  const [name, setName] = useState(" ");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>Infinity Chat</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        ></input>
        <Link onChange={(e)=>e.target.value===""?e.preventDefault():null} to="/chat"> </Link>{" "}
        <button onClick={sendUser} className="JoinBtn ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Join;
export { user };
