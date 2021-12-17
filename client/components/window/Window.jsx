import React, { useEffect, useRef, useState } from "react";

export const Window = ({ messages, setMessages, socket }) => {
  const [inputState, setInputState] = useState("");
  const messagesEndRef = useRef(null);

  function getTimeOfNow() {
    const today = new Date();
    const result = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return result;
  }

  // Getting each message as a paragraph tag
  const clientMessages = messages.map((message, idx) => (
    <div className="window-message" key={idx}>
      <p>{message.message}</p>
      <span>{message.time}</span>
    </div>
  ));

  // Handling whenever new messages are received
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [
      ...prevMessages,
        newMessage,
    ]);
    socket.emit("ClientNewMessage", newMessage);
    setInputState("");
  };

  // Whenever a new message is received by pressing "enter".
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addMessage({time: getTimeOfNow(), message: inputState});
    }
  };

  // Scroll to bottom or more specific decelration - to a temp div.
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

      <div className="window-chat">
        {clientMessages}
        <div ref={messagesEndRef} />
      </div>

      <div className="window-bar">
        <div className="window-bar-container">
          <div>
            <span className="material-icons-outlined">restore</span>
          </div>
          <div>
            <span className="material-icons-outlined">change_history</span>
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
          {/* Future assigment: change to text area in order to have bigger size of input */}
          {/* <textarea rows="2" cols="1" className="window-bar-input"></textarea> */}
          <button onClick={(e) => addMessage({time: getTimeOfNow(), message: inputState})}>send</button>
        </div>
      </div>
    </div>
  );
};
