import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { formartCurrency } from '../../utils/money.js';
import { LoadingEffect } from '../../components/LoadingEffect';
import "./HomePageGrid.scss";
import "./between-shop-and-item.css";
import { API_URL } from '../../config.js';

export function HomePageGrid({ products, setProducts }) {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProductsData = async () => {
      const response = await axios.get(`https://mpahla-ecommerce-prisma-backend.onrender.com/api/products`);
      const data = response.data;

      name && setProducts(data.filter(product => product.category === name));
      !name && setProducts(data);
      setIsLoading(false);
    };
    
    fetchProductsData();
  }, [name, setProducts]);
  
  if (isLoading) {
    return (
      <LoadingEffect />
    )
  } else {
    return (
      <div className="grid-layout js-grid-layout">
        {
          products.map((product) => {
            return (
              <div key={product.id} className="product-container"
  
              >
                <div className="product-image js-product-image"
                  data-product-id={product.id}>
                  <Link to={`/item/${product.id}`} >
                    <img src={product.imageURL} alt="" />
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
                    {formartCurrency(product.priceCents)}
                  </p>
  
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}