import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/UI/navbar/Navbar";
import { Window } from "../../components/window/Window";

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000";
const socket = socketIOClient(ENDPOINT);  

export const chat = ({ ...props }) => {
  const [messages, setMessages] = useState([{time: 'by itzik 😘', message: 'Thank you for using my app. you are connected 🥰.'}]);

  return (
    <div className="chat-container">
      <Sidebar />
      <Window messages={messages} setMessages={setMessages} socket={socket} />
    </div>
  );
};

export default chat;
