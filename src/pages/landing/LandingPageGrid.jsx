import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { LoadingEffect } from "../../components/LoadingEffect";
import { API_URL } from '../../config.js';

export function LandingPageGrid() {
  const [categories, setCategories] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const response = await axios.get(`https://mpahla-ecommerce-prisma-backend.onrender.com/api/products/category`);
      setCategories(response.data);
      setLoading(false);
    }

    fetchCategoriesData();
  }, []);

  if (Loading) {
    return (
      <LoadingEffect />
    )
  } else {
    return (
      
      <div className="home-grid-layout js-home-grid-layout">
        {
          categories.map((category) => {
            return (
              <Link to={`/home/${category.name}` } key={category.id} >
                <div className="content-container js-content-container"
                  data-product-category={category.category}>
                  <img src={category.imageURL} alt={category.name} />
                  <div className="content-link">
                    <span>{category.name}</span>
                    <p>&rarr;</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}