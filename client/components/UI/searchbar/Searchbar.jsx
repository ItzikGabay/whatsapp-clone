import React from "react";

export const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <div className="searchbar-input-container">
        <span class="material-icons-outlined">search</span>
        <input
          type="text"
          className="searchbar-input"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
};
