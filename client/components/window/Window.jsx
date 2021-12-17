import React, { useEffect, useRef, useState } from "react";

export const Window = ({ messages, setMessages, socket }) => {
  const [inputState, setInputState] = useState("");

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  // Getting each message as a paragraph tag
  const clientMessages = messages.map((message, idx) => (
    <p className="window-message" key={idx}>
      {message}
    </p>
  ));

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  // Handling whenever new messages are received
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      "Your message: " + newMessage,
    ]);
    socket.emit("ClientNewMessage", newMessage);
    setInputState("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addMessage(inputState);
    }
  };

  useEffect(() => {
    socket.on("ServerNewMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => socket.disconnect();
  }, []);

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

      <div className="window-chat">{clientMessages}
      <div ref={messagesEndRef} />
      </div>

      <div className="window-bar">
        <div className="window-bar-container">
          <div>
            <span class="material-icons-outlined">restore</span>
          </div>
          <div>
            <span class="material-icons-outlined">change_history</span>
          </div>
          <input
            type="text"
            className="window-bar-input"
            placeholder="Type a message"
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <button onClick={(e) => addMessage(inputState)}>send</button>
        </div>
      </div>
    </div>
  );
};
