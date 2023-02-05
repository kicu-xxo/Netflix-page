import { useSelector } from "react-redux";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieId(id) {
  return (dispatch, state) => {
    dispatch({ type: "GET_MOVIE_ID", payload: { id } });
  };
}

//TMDB에서 API 가져오는 함수
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRateApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      // const reviewApi = api.get(
      //   `https://api.themoviedb.org/3/movie/movieId/reviews?api_key=${API_KEY}&language=en-US&page=1`
      // );

      let [popularMovies, topRateMovies, upcomingMovies, genreList] =
        await Promise.all([popularMovieApi, topRateApi, upComingApi, genreApi]);
      console.log("genre? ", genreList);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRateMovies: topRateMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getMovieId,
};
