import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <span className="form-title">Lama Chat</span>
        <span className="form-subtitle">Login</span>
        <div className="form-input">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Sign in</button>

        <p className="form-register-link">
          You don't have account? <a href="">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
