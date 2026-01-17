import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function LandingPage() {
  return (
    <>
    <Header />

      <div className="main-container">
        <div className="background-image-container">
          <div className="background-overlay">
            <p>Livin' that everyday vibe</p>
            <Link to="/home">
              <button className="js-shop-all-button">
                Shop All
              </button>
            </Link>
          </div>
        </div>

        <div className="home-grid-layout js-home-grid-layout">
        </div>
      </div>

      <Footer />
    </>
  );
}