import { useEffect } from "react";
import { useParams } from "react-router";
import { formatCurrency } from "../../scripts/utils/money.js";
import "./ItemPageContainer.scss";

export function ItemPageContainer({ products }) {
  const { id } = useParams();
  let matchingProduct;

  useEffect(() => {
    products.forEach(product => {
      if (id === product.id) {
        matchingProduct = product;
      }
    })

  }, []);

  return (
    <div className="main-container js-main-container">

      <div class="product-names display-product-names">
        <p class="product-brand">
          {matchingProduct.brand}
        </p>
        <p class="product-name">
          {matchingProduct.name}
        </p>
        <p class="product-price">
          R{formatCurrency(matchingProduct.priceCents)}
        </p>
      </div>

      <button class="add-to-cart-button display-add-top-button js-add-to-cart-button"
        data-product-id={matchingProduct.id}
      >
        Add to Cart
      </button>

      <div class="image-container">
        <img class="product-image" src={matchingProduct.image} alt="product-image"/>
      </div>

      <div class="product-info">
        <div class="product-names">
          <p class="product-brand">
            ${matchingProduct.brand}
          </p>
          <p class="product-name">
            ${matchingProduct.name}
          </p>
          <p class="product-price">
            R{formatCurrency(matchingProduct.priceCents)}
          </p>
        </div>

        <div class="size-section">
          <div class="size-title">
            <span class="select-size primary-size">
              Select Size
            </span>

            <div class="guide-container">
              <img class="guide-icon" src="images/icons/arrow-down-circle.svg" alt=""/>
                <span class="size-guide primary-size">
                  Size Guide
                </span>
            </div>
          </div>

          <ul class="size-options">
            <li class="js-size-button">XS</li>
            <li class="js-size-button">S</li>
            <li class="js-size-button">M</li>
            <li class="js-size-button">L</li>
            <li class="js-size-button">XL</li>
            <li class="js-size-button">XXL</li>
          </ul>

          <div class="added-row">
            <select name="number" id="number" class="js-select-value-${matchingProduct.id}">
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

            <span class="added-message js-added-message-${matchingProduct.id}">Added</span>
          </div>

          <button class="add-to-cart-button js-add-to-cart-button"
            data-product-id="${matchingProduct.id}"
          >
            Add to Cart
          </button>

          <button class="favourite-button js-favourite-button">
            Favourite <span class="heart js-heart">&#9825;</span>
          </button>

          <div class="ratings">
            <p class="title-ratings">Ratings</p>
            <div class="stars-row">
              Stars: <img class="rating-image" src="images/ratings/rating-${matchingProduct.ratings.starts * 10}.png" alt="" />
            </div>
            <div class="counts-row">
              Counts: <span class="count">${matchingProduct.ratings.counts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}