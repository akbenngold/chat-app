import React from "react";
import ChatInfo from "./ChatInfo";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import "./Chat.scss";

function Chat() {
  return (
    <div className="chat">
      <ChatInfo />
      <ChatBody />
      <ChatInput />
    </div>
  );
}

export default Chat;
