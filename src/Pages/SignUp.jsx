import { Link } from "react-router-dom";
import React from "react";
import "./SignUp.scss";

function SignUp() {
  return (
    <div className="login">
      <form className="login__form">
        <span className="form-title">Lama Chat</span>
        <span className="form-subtitle">Sign up</span>
        <div className="form-input">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <input type="file" id="profile-image" />
        <label htmlFor="profile-image">
          <img src="src/assets/add-dp.svg" alt="" /> Add an avatar
        </label>

        <button>Sign up</button>

        <p className="form-register-link">
          You do have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
