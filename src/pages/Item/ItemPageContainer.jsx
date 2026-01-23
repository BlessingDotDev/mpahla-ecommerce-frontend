import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { formatCurrency } from "../../scripts/utils/money.js";
import "./ItemPageContainer.scss";
import { Loading } from "../../components/Loading";

export function ItemPageContainer({loadCart}) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState('6971e3c1535c8bfb31e97d7c');
  const [isAdded, setIsAdded] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`);
      setProduct(response.data);
    }

    fetchData();
  }, [id]);

  const addToCart = async(product, quantity, deliveryOption) => {
     try {
      const res = await axios.post('/api/cart', {
        product: product._id, 
        quantity: 1,
        deliveryOption: '6971e3c1535c8bfb31e97d7c'
      });

      await loadCart();
      console.log('Added to cart:', res.data);
    } catch (err) {
      console.error('Add to cart failed:', err.response?.data || err.message);
    }
  }

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
  }

  const handleClick = () => {
    setIsAdded(!isAdded)
    console.log(isAdded)
  }

  if (!product) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className="main-item-container js-main-container">
  
        <div className="product-names display-product-names">
          <p className="product-brand">
            {product.brand}
          </p>
          <p className="product-name">
            {product.name}
          </p>
          <p className="product-price">
            {formatCurrency(product.priceCents)}
          </p>
        </div>
  
        <button className="add-to-cart-button display-add-top-button js-add-to-cart-button"
          data-product-id={product._id}
          onClick={() => addToCart(product, quantity, deliveryOption)}
        >
          Add to Cart
        </button>
  
        <div className="image-container">
          <img className="product-image" src={product.image} alt="product-image"/>
        </div>
  
        <div className="product-info">
          <div className="product-names">
            <p className="product-brand">
              {product.brand}
            </p>
            <p className="product-name">
              {product.name}
            </p>
            <p className="product-price">
              {formatCurrency(product.priceCents)}
            </p>
          </div>
  
          <div className="size-section">
            <div className="size-title">
              <span className="select-size primary-size">
                Select Size
              </span>
  
              <div className="guide-container">
                <img className="guide-icon" src="images/icons/arrow-down-circle.svg" alt=""/>
                  <span className="size-guide primary-size">
                    Size Guide
                  </span>
              </div>
            </div>
  
            <ul className="size-options">
              {
                product.size.map((siz) => (
                  <li 
                    key={siz}
                    className={isAdded ? 'size-button' : 'chosen-size' } 
                    onClick={ handleClick }>{siz}</li>
                ))
              }
            </ul>
  
            <div className="added-row">
              <select 
                name="number" 
                id="number" 
                className="js-select-value-${product.id}"
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
  
              <span className={`added-message js-added-message-${product.id}`}>Added</span>
            </div>
  
            <button className="add-to-cart-button js-add-to-cart-button"
              data-product-id={product._id}
              onClick={() => addToCart(product, quantity, deliveryOption)}
            >
              Add to Cart
            </button>
  
            <button className="favourite-button js-favourite-button">
              Favourite <span className="heart js-heart">&#9825;</span>
            </button>
  
            <div className="ratings">
              <p className="title-ratings">Ratings</p>
              <div className="stars-row">
                Stars: <img className="rating-image" src={`images/ratings/rating-${product.ratings.starts * 10}.png`} alt="" />
              </div>
              <div className="counts-row">
                Counts: <span className="count">{product.ratings.counts}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}