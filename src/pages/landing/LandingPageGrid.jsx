import { Link } from "react-router";
import products from "../../data/products";
import productsCatagories  from "../../data/productCategories";

export function LandingPageGrid() {

  function getMatchingProduct(category) {
    let matchingProduct;

    products.forEach(product => {
      if (category.category === product.category) {
        matchingProduct = product;
      };
    });

    return matchingProduct;
  }

  return (
    
      <div className="home-grid-layout js-home-grid-layout">
        {
          productsCatagories.map((category) => {
            const matchingProduct = getMatchingProduct(category);
            console.log(matchingProduct.image);
            
            return (
              <Link to="/home" key={matchingProduct.id}>
                <div className="content-container js-content-container"
                  data-product-category={`${matchingProduct.category}`}>
                  <img src={`${matchingProduct.image}`} alt="men content image" />
                  <div className="content-link">
                    <span>{`${category.category}`}</span>
                    <p>&gt</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
  );
}