import React from "react";
import "./Home.scss";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <div className="home-sidebar">
          <Sidebar />
        </div>
        <div className="home-chat">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Home;
