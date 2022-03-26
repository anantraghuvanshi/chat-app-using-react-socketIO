import React, { useEffect } from "react";
import { user } from "../Join/Join";
import socketIO from "socket.io-client";

const ENDPOINT ="https://localhost:4500/";

const Chat = () => {

  const socket = socketIO(ENDPOINT, {transports: ['websocket']});

  

  useEffect(() => {
    socket.on("connect",()=>{
      alert("Connected");
    } )
  
    return () => {
      
    }
  }, [])
  

  return (
    <div classname="ChatPage">
      <div className="ChatContainer">
        <div className="header"> </div>
        <div className="chatBox"> </div>
        <div className="inputBox"> </div>
      </div>
    </div>
  );
};

export default Chat;
