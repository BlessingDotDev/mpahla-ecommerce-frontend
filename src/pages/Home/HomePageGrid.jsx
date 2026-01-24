import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { formatCurrency } from '../../scripts/utils/money.js';
import "./HomePageGrid.scss";
import "./between-shop-and-item.css"

export function HomePageGrid({ products, setProducts }) {
  const { name } = useParams();

  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await axios.get("/api/products");
      const data = response.data;

      name && setProducts(data.filter(product => product.category === name));
      !name && setProducts(data);
    };

    fetchProductsData();
  }, [name, setProducts]);

  return (
    <div className="grid-layout js-grid-layout">
      {
        products.map((product) => {
          return (
            <div key={product._id} className="product-container"

            >
              <div className="product-image js-product-image"
                data-product-id={product._id}>
                <Link to={`/item/${product._id}`} >
                  <img src={product.image} alt="" />
                </Link>
              </div>
              <div className="product-info">
                <p className="product-name">
                  {product.name}
                </p>
                <p className="product-brand">
                  Nike-Jordan
                </p>
                <p className="product-price">
                  R{formatCurrency(product.priceCents)}
                </p>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}