import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const name = useSelector((state) => state.name);
  const image = useSelector((state) => state.image);
  const description = useSelector((state) => state.description);
  const price = useSelector((state) => state.price);

  if (!name) {
    return (
      <div className="details-notfound">
        <h2>No product selected</h2>
        <Link to="/home">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="details-main page-enter">
      <div className="details-card">
        <div className="details-image-wrapper anim-fade-in-left">
          <img className="details-img" src={image} alt={name} />
        </div>
        <div className="details-content anim-fade-in-right">
          <h1 className="details-heading">{name}</h1>
          <p className="details-description">{description}</p>
          <div className="details-price-section">
            <span className="details-price-label">Price</span>
            <span className="details-price-value">${price}</span>
          </div>
          <Link to="/home" className="details-back-btn">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
