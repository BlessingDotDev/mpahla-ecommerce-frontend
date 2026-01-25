import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { formartCurrency } from "../../utils/money.js";
import "./ItemPageContainer.scss";
import { LoadingEffect } from "../../components/LoadingEffect";


export function ItemPageContainer({ loadCart }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState(
    "6971e3c1535c8bfb31e97d7c"
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedMessage, setAddedMessage] = useState(false); // Track Add-to-Cart message
  const [isFavourite, setIsFavourite] = useState(false); // Track favourite state
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(response.data);
    };
    fetchData();
  }, [id]);

  // Add item to cart
  const addToCart = async (product, quantity, deliveryOption) => {
    try {
      const res = await axios.post("/api/cart", {
        product: product._id,
        quantity,
        deliveryOption,
      });

      await loadCart();

      // Show "Added!" message
      setAddedMessage(true);

      // Hide message after 5 seconds
      setTimeout(() => setAddedMessage(false), 5000);

      navigate('/checkout')
      console.log("Added to cart:", res.data);
    } catch (err) {
      console.error("Add to cart failed:", err.response?.data || err.message);
    }
  };

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleClick = (size) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
    // Optionally: call backend to save favorite state
  };

  if (!product) {
    return <LoadingEffect />;
  }

  return (
    <div className="main-item-container js-main-container">
      {/* Product Info */}
      <div className="product-names display-product-names">
        <p className="product-brand">{product.brand}</p>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{formartCurrency(product.priceCents)}</p>
      </div>

      {/* Top Add to Cart Button */}
      <button
        className="add-to-cart-button display-add-top-button js-add-to-cart-button"
        data-product-id={product._id}
        onClick={() => addToCart(product, quantity, deliveryOption)}
      >
        Add to Cart
      </button>

      {/* Product Image */}
      <div className="image-container">
        <img className="product-image" src={product.image} alt="product-image" />
      </div>

      {/* Product Info Section */}
      <div className="product-info">
        <div className="product-names">
          <p className="product-brand">{product.brand}</p>
          <p className="product-name">{product.name}</p>
          <p className="product-price">{formartCurrency(product.priceCents)}</p>
        </div>

        {/* Size Section */}
        <div className="size-section">
          <div className="size-title">
            <span className="select-size primary-size">Select Size</span>
            <div className="guide-container">
              <img
                className="guide-icon"
                src="images/icons/arrow-down-circle.svg"
                alt=""
              />
              <span className="size-guide primary-size">Size Guide</span>
            </div>
          </div>

          <ul className="size-options">
            {product.size.map((siz) => (
              <li
                key={siz}
                className={selectedSize === siz ? "chosen-size" : "size-button"}
                onClick={() => handleClick(siz)}
              >
                {siz}
              </li>
            ))}
          </ul>

          <div className="added-row">
            {/* Quantity selector */}
            <select
              name="number"
              id="number"
              className={`js-select-value-${product.id}`}
              onChange={handleChange}
              value={quantity}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Add-to-cart message */}
            {addedMessage && (
              <span
                className="added-message"
                style={{
                  marginLeft: "10px",
                  color: "green",
                  fontWeight: "600",
                  transition: "opacity 0.3s",
                }}
              >
                Added!
              </span>
            )}
          </div>

          {/* Secondary Add to Cart Button */}
          <button
            className="add-to-cart-button js-add-to-cart-button"
            data-product-id={product._id}
            onClick={() => addToCart(product, quantity, deliveryOption)}
          >
            Add to Cart
          </button>

          {/* Favourite Button */}
          <button
            className="favourite-button js-favourite-button"
            onClick={toggleFavourite}
          >
            Favourite{" "}
            <span className="heart js-heart">
              {isFavourite ? "\u2665" : "\u2661"}
            </span>
          </button>

          {/* Ratings */}
          <div className="ratings">
            <p className="title-ratings">Ratings</p>
            <div className="stars-row">
              Stars:{" "}
              <img
                className="rating-image"
                src={`images/ratings/rating-${product.ratings.starts * 10}.png`}
                alt=""
              />
            </div>
            <div className="counts-row">
              Counts: <span className="count">{product.ratings.counts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}