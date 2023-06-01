import "./landing.css";
import { Link } from "react-router-dom";
import imgData from "../img.json";

const LandingPage = () => {
  const { img } = imgData;
  return (
    <div className="landing-page">
      <h1>BUSCADOR DE PELICULAS</h1>

      <div className="image">
        {img &&
          img.map((image) => (
            <div className="image-card" key={image.id}>
              <Link to="/home">
                <img src={image.url} alt={image.alt} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
