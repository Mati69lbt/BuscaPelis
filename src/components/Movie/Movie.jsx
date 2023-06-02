import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearMovieDetail, get_Movie_Details } from "../../redux/slices/movies";
import "./movie.css";

import { useNavigate } from "react-router-dom";

const Movie = () => {
  const movieID = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movies.movieDetail);
  const navigate = useNavigate();

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Poster,
    Plot,
    Director,
    Actors,
    Genre,
    Language,
    Released,
    Country,
  } = movieDetail;
  console.log(Title, imdbRating, imdbVotes, Runtime, Poster, Plot);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(get_Movie_Details(movieID))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    return () => {
      dispatch(clearMovieDetail());
    };
  }, [dispatch, movieID]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          <b>Loading...</b>
        </div>
      </div>
    );
  }

  return (
    <div className="all">
      <div className="titulo">
        <h1 style={{ color: "white" }}>Movie:</h1>
        <h2>{Title}</h2>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <ul className="listado">
            <li>
              <b>Raiting: </b>
              <i>{imdbRating}</i>
            </li>
            <li>
              <b>Votos: </b>
              <i>{imdbVotes} </i>
            </li>
            <li>
              <b>Duración: </b>
              <i>{Runtime}</i>
            </li>
            <li>
              <b>Estreno: </b>
              <i>{Released}</i>
            </li>
            <li className="liplot">
              <i>{Plot}</i>
            </li>
            <li>
              <b>Director: </b>
              <span>{Director} </span>
            </li>
            <li>
              <b>Actores: </b>
              <span>{Actors}</span>
            </li>
            <li>
              <b>Género: </b>
              <span>{Genre}</span>
            </li>
            <li>
              <b>Pais: </b>
              <span>{Country}</span>
            </li>
            <li>
              <b>Idioma: </b>
              <span>{Language}</span>
            </li>
          </ul>
        </div>
        <div className="flex-item">
          <img
            src={
              Poster !== "N/A"
                ? Poster
                : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
            }
            alt={Title}
            style={{ margin: "5px" }}
          />
        </div>
      </div>
      <button onClick={() => navigate(-1)} className="Btn">
        <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
          <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
        </svg>
        <p className="text">BACK</p>
        <span className="effect"></span>
      </button>
    </div>
  );
};

export default Movie;
