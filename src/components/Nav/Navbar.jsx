import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // usar Navigate
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="navbar">
        <button onClick={() => navigate("/home")}>HOME</button>
        <h1 className="title">BUSCADOR DE PELICULAS</h1>
        <button onClick={() => navigate("/favoritas")}>FAV</button>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
