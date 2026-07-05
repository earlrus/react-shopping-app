import "./Logout.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Logout = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLogout, setIsLogout] = useState(null);
  const [error, setError] = useState("");

  const accessToken = `${token}`;

  const logoutHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/auth/users/logout", null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      dispatch({ type: "LOGOUT" });
      setIsLogout(true);

      setTimeout(() => {
        history.replace("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Logout failed");
      setIsLogout(false);
    }
  };

  return (
    <div className="main-logout">
      <div className="auth-card anim-scale-in">
        <h2 className="auth-title">Logout</h2>
        <p className="auth-subtitle">Are you sure you want to sign out?</p>
        <form onSubmit={logoutHandler}>
          {error && <p className="error-message anim-fade-in">{error}</p>}
          {isLogout && (
            <p className="success-message anim-bounce-in">
              ✓ Successfully Logged Out!
            </p>
          )}
          <button
            type="submit"
            className="auth-btn logout-btn anim-fade-in anim-delay-1 hover-pulse"
          >
            Sign Out
          </button>
        </form>
        <p className="auth-footer anim-fade-in anim-delay-2">
          Changed your mind? <Link to="/welcome">Back to Shopping</Link>
        </p>
      </div>
    </div>
  );
};

export default Logout;
