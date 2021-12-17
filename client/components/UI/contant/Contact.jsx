import React from "react";

export const Contact = ({name}) => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <img
          src="https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="dev"
        />
      </div>
      <div className="contact-right">
        <div className="contact-right-row1">
          <p>{name}</p>
          <p>Itzik its so gever</p>
        </div>
        <div className="contact-right-row2">
          <p>11/12/2025</p>
          <p>
            <span class="material-icons-outlined">near_me</span>
          </p>
        </div>
      </div>
    </div>
  );
};
