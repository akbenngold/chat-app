import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span>WaveLink Chat</span>
      <div className="navbar__right">
        <div className="username">
          <img src="https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs" alt="" />
          <span>John Doe</span>
        </div>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
