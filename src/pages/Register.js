import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [register, setRegister] = useState(false);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");

  let enteredName = useRef();
  let enteredEmail = useRef();
  let enteredPassword = useRef();
  let re_enteredPassword = useRef();
  let enteredMobileNo = useRef();
  let enteredAge = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setValid(true);

    const name = enteredName.current.value;
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    const re_password = re_enteredPassword.current.value;
    const mobile_no = enteredMobileNo.current.value;
    const age = enteredAge.current.value;

    if (!name || !email || !password || !re_password || !mobile_no || !age) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== re_password) {
      setValid(false);
      return;
    }

    try {
      const res = await axios.post("/api/auth/users", {
        name,
        email,
        password,
        mobile_no,
        age,
      });
      console.log(res.data);
      setRegister(true);
      setValid(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    }
  };

  return (
    <div className="main-register">
      <div className="auth-card anim-scale-in">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Smart Shoppe today</p>
        <form onSubmit={submitHandler}>
          <div className="form-group anim-fade-in anim-delay-1">
            <label htmlFor="name">Name</label>
            <input id="name" ref={enteredName} placeholder="Your full name" />
          </div>
          <div className="form-group anim-fade-in anim-delay-1">
            <label htmlFor="emil">Email</label>
            <input
              id="emil"
              type="email"
              ref={enteredEmail}
              placeholder="Your email"
            />
          </div>
          <div className="form-group anim-fade-in anim-delay-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              ref={enteredPassword}
              placeholder="Create a password"
            />
          </div>
          <div className="form-group anim-fade-in anim-delay-2">
            <label htmlFor="re-password">Re-Enter Password</label>
            <input
              id="re-password"
              type="password"
              ref={re_enteredPassword}
              placeholder="Confirm password"
            />
          </div>
          <div className="form-group anim-fade-in anim-delay-3">
            <label htmlFor="mobile-no">Mobile No</label>
            <input
              id="mobile-no"
              ref={enteredMobileNo}
              placeholder="Your mobile number"
            />
          </div>
          <div className="form-group anim-fade-in anim-delay-3">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              ref={enteredAge}
              placeholder="Your age"
            />
          </div>
          {error && <p className="error-message anim-fade-in">{error}</p>}
          {register && valid && (
            <p className="success-message anim-bounce-in">
              ✓ Successfully Registered! <Link to="/login">Login now</Link>
            </p>
          )}
          {!valid && (
            <p className="error-message anim-fade-in">Passwords do not match</p>
          )}
          <button
            type="submit"
            className="auth-btn anim-fade-in anim-delay-4 hover-pulse"
          >
            Sign Up
          </button>
        </form>
        <p className="auth-footer anim-fade-in anim-delay-5">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
