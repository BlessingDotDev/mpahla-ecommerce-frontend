import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { LandingPageGrid } from "./LandingPageGrid";
import "./LandingPage.css"
import bg from "../../assets/images/2025wk36-mrp-gender-mens-spot-a.avif"

export function LandingPage() {
  console.log('hello');
  return (
    <>
      <Header />

      <title>Mpahla Online Store</title>

      <div className="background-image-container" style={{
        backgroundImage: `url(${bg})`
      }}>
        <div className="background-overlay">
          <p>Livin' that everyday vibe</p>
          <Link to="/home">
            <button className="js-shop-all-button">
              Shop All
            </button>
          </Link>
        </div>
      </div>

      <LandingPageGrid />

      <Footer />
    </>
  );
}