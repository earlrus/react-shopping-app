import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const [isLog, setIsLog] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");

    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("/api/auth/users/login", {
        email,
        password,
      });

      dispatch({ type: "IN", value: true });
      dispatch({ type: "update_token", value: res.data.token });
      setIsLog(true);

      setTimeout(() => {
        history.replace("/welcome");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
      dispatch({ type: "IN", value: false });
    }
  };

  return (
    <div className="main-login">
      <div className="auth-card anim-scale-in">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to continue shopping</p>
        <form onSubmit={loginHandler}>
          <div className="form-group anim-fade-in anim-delay-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              ref={enteredEmail}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group anim-fade-in anim-delay-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              ref={enteredPassword}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error-message anim-fade-in">{error}</p>}
          {isLog && (
            <p className="success-message anim-bounce-in">
              ✓ Login Successful!
            </p>
          )}
          <button
            type="submit"
            className="auth-btn anim-fade-in anim-delay-3 hover-pulse"
          >
            Login
          </button>
        </form>
        <p className="auth-footer anim-fade-in anim-delay-4">
          Don't have an account? <Link to="/">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
