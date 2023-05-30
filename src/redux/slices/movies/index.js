import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movieDetail: {},
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    clearMovieDetail: (state) => {
      state.movieDetail = {};
    },
  },
});

//exportar el reducer desde las actions
export const { setMovies, setMovieDetail, clearMovieDetail } =
  movieSlice.actions;

//exporta por default movies
export default movieSlice.reducer;

export function getMovies(title) {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=6d022ee2&s=${title}`
      );
      const movies = await response.json();
      return dispatch(setMovies(movies.Search));
    } catch (error) {
      console.error("Error al obtener las películas:", error);
    }
  };
}

export function get_Movie_Details(id) {
  const imdbID = Object.values(id);
  return async function (dispatch) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=6d022ee2&i=${imdbID}`
      );
      const detail = await response.json();
      dispatch(setMovieDetail(detail));
    } catch (error) {
      console.error("Error al obtener los detalles de la película:", error);
    }
  };
}
