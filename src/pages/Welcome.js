import "./Welcome.css";
import { useHistory, Link } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();

  const welcomeHandler = () => {
    history.replace("/home");
  };

  return (
    <section className="welcome-main">
      <div className="welcome-card anim-bounce-in">
        <h1 className="welcome-heading">Welcome to Smart Shoppe</h1>
        <p className="welcome-tagline">
          Discover amazing products at unbeatable prices
        </p>
        <div className="welcome-image-wrapper">
          <img
            className="welcome-image"
            src="https://www.addictioncenter.com/app/uploads/2020/01/online_shopping_addiction-scaled.jpeg"
            alt="Shopping"
          />
        </div>
        <button
          className="welcome-btn anim-fade-in anim-delay-3"
          onClick={welcomeHandler}
        >
          🛒 Start Shopping Now
        </button>
        <p className="welcome-footer anim-fade-in anim-delay-4">
          <Link to="/home">Browse products</Link>
        </p>
      </div>
    </section>
  );
};

export default Welcome;
