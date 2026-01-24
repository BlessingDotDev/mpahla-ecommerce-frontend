import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Swiper.css';

export function Swiper({products}) {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: false,
  }

  return (
    <Slider {...settings} className="swiper-container">
      {products.map((product) => (
        <div key={product.id} className="slide-content">
          <img src={product.image} 
            alt={product.name} className="image"/>
            <h2>{product.name}</h2>
        </div>
      ))}
    </Slider>
  );
}