import React from "react";
import "./Chat.scss";
function Message() {
  return (
    <div>
      <div className="message">
        <img src="../assets/avatar.jpeg" alt="" />

        <div className="message__content">
          <div className="message__body">hello</div>
          <span className="timestamp">1:32</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
