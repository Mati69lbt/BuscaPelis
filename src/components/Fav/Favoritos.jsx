import Navbar from "../Nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove_Movie_Favorite } from "../../redux/slices/movies";
import "./fav.css";
import { useNavigate } from "react-router-dom";

const Favoritos = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.movies.favorites);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <div></div>
        <div className="tituloo">
          <h2 className="tith2">Tus Peliculas Favoritas van Aquí!</h2>
        </div>
        <div>
          {favorite &&
            favorite.map((movie) => (
              <div key={movie.imdbID} className="fav">
                <article className="item">
                  <Link to={`/movie/${movie.imdbID}`} className="item">
                    <img src={movie.Poster} alt={movie.title} height={120} />
                  </Link>
                </article>
                <article className="link">
                  <Link to={`/movie/${movie.imdbID}`} className="item">
                    <span>{movie.Title}</span>
                  </Link>
                </article>
                <article>
                  <button
                    onClick={() =>
                      dispatch(remove_Movie_Favorite(movie.imdbID))
                    }
                    className="cross"
                  >
                    <p className="x">X</p>
                  </button>
                </article>
              </div>
            ))}
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="Btn btn-back">
        <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
          <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
        </svg>
        <p className="text">BACK</p>
        <span className="effect"></span>
      </button>
    </div>
  );
};

export default Favoritos;
