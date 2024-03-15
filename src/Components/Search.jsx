import React from "react";
import ChatListItem from "./ChatListItem";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Find a user" />
      <ChatListItem />
    </div>
  );
}

export default Search;
