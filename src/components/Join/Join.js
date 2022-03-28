import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.jpg";
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
      <div className="JoinContainer ">
        <img src={logo} alt="logo" />
        <h1>Infinity Chat</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        ></input>
        <Link to='/chat' onChange={(event)=>!name ? event.preventDefault():null} > </Link>
        <button onClick={sendUser} className="JoinBtn btn btn-three">
          Login
        </button>
      </div>
    </div>
  );
};

export default Join
export { user }
