import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // usar Navigate
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="navbar">
        <button onClick={() => navigate("/home")} className="Btn">
          <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
            <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
          </svg>
          <p className="text">HOME</p>
          <span className="effect"></span>
        </button>

        <h1 className="title">BUSCADOR DE PELICULAS</h1>
        <button onClick={() => navigate("/favoritas")} className="Btn">
          <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
            <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
          </svg>
          <p className="text">FAV</p>
          <span className="effect"></span>
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
