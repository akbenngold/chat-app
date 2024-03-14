import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
