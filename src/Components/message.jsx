import React from "react";
import "./Chat.scss";

function Message() {
  return (
    <div>
      <div className="message owner">
        <img className="message__img" src="src/assets/avatar.jpeg" alt="" />

        <div className="message__content">
          <img src="src/assets/avatar.jpeg" alt="" />
          <div className="message__body">hello</div>
          <span className="timestamp">1:32</span>
        </div>
      </div>

      <div className="message">
        <img className="message__img" src="src/assets/avatar.jpeg" alt="" />

        <div className="message__content">
          <img src="src/assets/avatar.jpeg" alt="" />
          <div className="message__body">hello</div>
          <span className="timestamp">1:32</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
