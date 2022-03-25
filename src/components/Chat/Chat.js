import React from 'react';
import {user} from "../Join/Join"

const Chat = () => {
  return (
    <div classname ="ChatPage">
    <div className="ChatContainer">
    <div className="header"> </div>
    <div className="chatBox"> </div>
    <div className="inputBox"> </div>
    </div>
    <h1>{user}</h1>
    </div>
  )
}

export default Chat;