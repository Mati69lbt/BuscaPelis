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
          <img src={Poster} alt={Title} style={{ margin: "5px" }} />
        </div>
      </div>
      <button onClick={() => navigate(-1)}>BACK</button>;
    </div>
  );
};

export default Movie;
