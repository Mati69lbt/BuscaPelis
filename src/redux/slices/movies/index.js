import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

//exportar el reducer desde las actions
export const { setMovies } = movieSlice.actions;

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
