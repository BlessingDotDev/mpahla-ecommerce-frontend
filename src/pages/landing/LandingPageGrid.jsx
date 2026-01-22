import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { Loading } from "../../components/Loading";

export function LandingPageGrid() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const response = await axios.get('http://localhost:5000/api/category');
      setCategories(response.data);
    }

    fetchCategoriesData();
  }, []);

  const passParam = () => {

  }

  if (!categories) {
    return (
      <Loading />
    )
  } else {
    return (
      
      <div className="home-grid-layout js-home-grid-layout">
        {
  
          categories.map((category) => {
            return (
              <Link to={`/home/${category.name}` } key={category.id} onClick={passParam}>
                <div className="content-container js-content-container"
                  data-product-category={category.category}>
                  <img src={category.image} alt={category.name} />
                  <div className="content-link">
                    <span>{category.name}</span>
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
}