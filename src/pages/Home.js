import axios from "axios";
import { Fragment, useEffect, useState, useRef } from "react";
import Products from "../components/Products";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchName = useRef();
  const [products, setProduct] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/course");
      setProduct(res.data);
      setLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const clickHandler = () => {
    const SName = searchName.current.value.trim();
    if (!SName) {
      setSearchError("Please enter a product name");
      return;
    }

    setSearchError("");
    const result = products.find(
      (prd) => prd.name.toLowerCase() === SName.toLowerCase(),
    );
    if (!result) {
      setSearchError(`No product found: "${SName}"`);
      return;
    }

    dispatch({
      type: "SET_PRODUCT",
      payload: {
        name: result.name,
        image: result.image,
        description: result.description,
        price: result.price,
      },
    });

    history.push("/details");
  };

  return (
    <Fragment>
      <div className="home-header anim-fade-in-up">
        <h2 className="home-title">
          {loaded ? `All Products (${products.length})` : "Loading products..."}
        </h2>
        <div className="search-bar">
          <input
            id="search"
            placeholder="Search product by name..."
            ref={searchName}
            onKeyDown={(e) => e.key === "Enter" && clickHandler()}
          />
          <button onClick={clickHandler} className="search-btn">
            🔍 Search
          </button>
        </div>
        {searchError && (
          <p className="search-error anim-fade-in">{searchError}</p>
        )}
      </div>

      <div className="products-grid">
        {loaded &&
          products.map((productItem, index) => (
            <div
              key={productItem.id}
              className={`anim-fade-in anim-delay-${Math.min(index % 5, 5)}`}
            >
              <Products
                key={productItem.id}
                name={productItem.name}
                image={productItem.image}
                price={productItem.price}
                description={productItem.description}
              />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Home;
