import React from "react";
import "../Pages/Home.scss";
import ChatListItem from "./ChatListItem";

function Chatlist() {
  return (
    <div className="chatlist">
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </div>
  );
}

export default Chatlist;
