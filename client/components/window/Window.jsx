import React, { useEffect, useRef, useState } from "react";

export const Window = ({ messages, setMessages, socket }) => {

  const [inputState, setInputState] = useState("");

  // Getting each message as a paragraph tag
  const clientMessages = messages.map((message, idx) => <p key={idx}>{message}</p>);

  // Handling whenever new messages are received
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, "ONLY YOU: " + newMessage]);
    socket.emit("ClientNewMessage", newMessage);
    setInputState('');
  };

  useEffect(() => {
    socket.on("ServerNewMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    })

    return () => socket.disconnect();
  }, [])

  return (
    <div className="window-container">
      <div className="navbar-right">
        <div className="navbar-right-items">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="dev"
          />
          <p>Public group</p>
        </div>
      </div>

      <div className="window-chat">{clientMessages}</div>

      <div className="window-bar">
        <div className="window-bar-container">
          <p>1</p>
          <p>2</p>
          <input
            type="text"
            className="window-bar-input"
            placeholder="Type a message"
            value={inputState}
            onChange={(e) => {setInputState(e.target.value)}}
          />
          <button onClick={(e) => addMessage(inputState)}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};
