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
  const { movies, favorites } = state.movies;

  console.log(favorites);
  console.log(movies);

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
          <div className="a">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="input-container">
                <input
                  id="title"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => handleChange(e)}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="Btn"
                  onClick={() => dispatch(getMovies(title))}
                >
                  <p className="text">Buscar</p>
                  <span className="effect"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          {!movies || movies.length === 0 ? (
            <h1 className="bup">
              &quot;Quizás estés en la búsqueda de una película
              <br />
              o puede ser que lo que buscas no esté disponible,
              <br />
              pero lamentablemente no se pudo encontrar lo que deseas.&quot;
            </h1>
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
                      <Link to={`/movie/${movie.imdbID}`}>
                        <img
                          src={movie.Poster}
                          alt={movie.title}
                          height={120}
                        />
                      </Link>
                    </article>
                    <article className="link">
                      {" "}
                      <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                    </article>
                    <article>
                      <button
                        className="Btn"
                        onClick={() => {
                          dispatch(
                            add_Movie_Favorite({
                              title: movie.Title,
                              id: movie.imdbID,
                            })
                          );
                        }}
                      >
                        <svg
                          viewBox="0 0 512 512"
                          className="svgIcon"
                          height="1em"
                        >
                          <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
                        </svg>

                        {/* compara el favorites.imdbID con el movie.imbdID */}
                        {favorites.some(
                          (fav) => fav.imdbID === movie.imdbID
                        ) ? (
                          <p className="text">Agregada</p>
                        ) : (
                          <p className="text">Favs</p>
                        )}
                        <span className="effect"></span>
                      </button>
                    </article>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
