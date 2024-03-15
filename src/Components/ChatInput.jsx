import React from "react";

function ChatInput() {
  return (
    <div className="chat-input">
      <input type="text" placeholder="Type something..." />

      <div className="chat-input__options">
        <input type="file" src="" alt="" id="chat-input__image" />
        <img src="src/assets/microphone.svg" alt="" />
        <label htmlFor="chat-input__image">
          <img src="src/assets/image.svg" alt="" />
        </label>

        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
