import { useState } from "react";
import Navbar from "../Nav/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { add_Movie_Favorite, getMovies } from "../../redux/slices/movies";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { movies } = state.movies;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(state.title);
    setTitle("");
  };
  return (
    <div>
      <Navbar />

      <div className="cuerpo">
        <div className="buscador">
          <h2>Buscador: </h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
              type="search"
              placeholder=" Search"
              aria-label="Search"
            />
            <button type="submit" onClick={() => dispatch(getMovies(title))}>
              Buscar
            </button>
          </form>
        </div>
      </div>
      <div>
        {!movies || movies.length === 0 ? (
          <h1 className="bup">Buscate una Peli!!</h1>
        ) : (
          <>
            <div className="imb">
              <article>Poster</article>
              <article>Pelicula</article>
              <article>Fav</article>
            </div>
            {movies &&
              movies.map((movie) => (
                <div key={movie.imdbID} className="imb">
                  <article>
                    <img src={movie.Poster} alt={movie.title} height={120} />
                  </article>
                  <article className="link">
                    {" "}
                    <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                  </article>
                  <article>
                    {" "}
                    <button
                      className="nl"
                      onClick={() =>
                        dispatch(
                          add_Movie_Favorite({
                            title: movie.Title,
                            id: movie.imdbID,
                          })
                        )
                      }
                    >
                      Favs
                    </button>
                  </article>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
