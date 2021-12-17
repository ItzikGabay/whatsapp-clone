import React, {useEffect} from "react";

export const Window = ({messages, setMessages}) => {

  const clientMessages = messages.map(message => <p>{message}</p>);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  useEffect(() => {
    console.log(messages);
  }, [messages])

  return (
    <div className="window-container">
      <div className="navbar-right">
        <div className="navbar-right-items">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="dev"
          />
          <p>Name of group</p>
        </div>
      </div>
      {/* End of navbar */}

      <div className="window-chat">
        {clientMessages}
      </div>

      <div className="window-bar">
        <div className="window-bar-container">
          <p>1</p>
          <p>2</p>
          <input type="text" className="window-bar-input" placeholder="Type a message"/>
          <button onClick={()=> addMessage('chat')}>send</button>
        </div>
      </div>
    </div>
  );
};
