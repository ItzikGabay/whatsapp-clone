import React, { useState, useEffect } from "react";
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/UI/navbar/Navbar';
import { Window } from '../../components/window/Window';

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:5000";

export const chat = ({ ...props }) => {

  const [messages, setMessages] = useState(['working', ['working 2']]);

  // Connecting to the socket 
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log(data)
    });

    return () => socket.disconnect();
  }, []);

   return (
       <div className="chat-container">
        <Sidebar/>
        <Window messages={messages} setMessages={setMessages}/>
       </div>
   );
};

export default chat;