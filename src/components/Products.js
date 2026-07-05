import "./Product.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const showDetails = async () => {
    try {
      const res = await axios.get("/api/course");
      const products = res.data;
      const details = products.find((prd) => prd.name === props.name);
      if (!details) return;

      dispatch({
        type: "SET_PRODUCT",
        payload: {
          name: details.name,
          image: details.image,
          description: details.description,
          price: details.price,
        },
      });

      history.push("/details");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-style anim-fade-in-up">
      <div className="products-style hover-lift">
        <div className="product-image-wrapper">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="product-info">
          <h2 className="product-name">{props.name}</h2>
          <p className="product-price">${props.price}</p>
          <button className="product-btn" onClick={showDetails}>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
