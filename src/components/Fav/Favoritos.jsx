import Navbar from "../Nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove_Movie_Favorite } from "../../redux/slices/movies";
import "./fav.css";

const Favoritos = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.movies.favorites);
  console.log(favorite);
  return (
    <div>
      <Navbar />
      <div>
        <div className="tituloo">
          <h2>Peliculas Favoritas</h2>
        </div>

        {favorite &&
          favorite.map((movie) => (
            <div key={movie.imdbID} className="fav">
              <article className="item">
                <img src={movie.Poster} alt={movie.title} height={120} />
              </article>
              <article>
                <Link to={`/movie/${movie.imdbID}`} className="item">
                  <span>{movie.Title}</span>
                </Link>
              </article>
              <article>
                <button
                  onClick={() => dispatch(remove_Movie_Favorite(movie.imdbID))}
                  className="item"
                >
                  X
                </button>
              </article>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favoritos;
