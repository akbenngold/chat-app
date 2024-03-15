import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chatlist from "./Chatlist";
function Sidebar() {
  return (
    <div>
      <Navbar />
      <Search />
      <Chatlist />
    </div>
  );
}

export default Sidebar;
