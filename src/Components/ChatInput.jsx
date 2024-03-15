import React from "react";

function ChatInput() {
  return (
    <div className="chat-input">
      <input type="text" placeholder="Type something..." />

      <div className="chat-input__options">
        <img src="src/assets/microphone.svg" alt="" />
        <img src="src/assets/image.svg" alt="" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
