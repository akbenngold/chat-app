import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span>WaveLink Chat</span>
      <div className="navbar__right">
        <div className="username">
          <img src="src/assets/avatar.jpeg" alt="" />
          <span>John Doe</span>
        </div>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
