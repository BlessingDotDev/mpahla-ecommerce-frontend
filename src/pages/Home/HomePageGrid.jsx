import { Link } from "react-router";
import products from "../../data/products.js";
import { formatCurrency } from '../../scripts/utils/money.js';
import "./HomePageGrid.css";
import "./between-shop-and-item.css"

export function HomePageGrid() {
  
  return (
    <div className="grid-layout js-grid-layout">
      {
        products.map((product) => {
          return (
            <div key={product.id} className="product-container"

            >
              <div className="product-image js-product-image"
                data-product-id={product.id}>
                  <Link to="/item">
                    <img src={product.image} alt=""/>
                  </Link>
              </div>
              <div className="product-info">
                <p className="product-name">
                  {product.name}
                </p>
                <p className="product-brand">
                  Nike-Jordan
                </p>
                <div className="product-ratings">
                  <img className="rating-image" src={`/images/ratings/rating-${product.ratings.starts * 10}.png`} alt=""/>
                    <span className="rating-count">
                      {product.ratings.counts}
                    </span>
                </div>
                <p className="product-price">
                  R{formatCurrency(product.priceCents)}
                </p>

                <div className="added-row">
                  <select name="number" id="number" className="js-select-value-${product.id}">
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

                <button className="add-to-cart-button js-add-to-cart-button" data-product-id={product.id}>
                  Add to cart
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}