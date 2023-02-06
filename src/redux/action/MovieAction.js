import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

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

      let [popularMovies, topRateMovies, upcomingMovies, genreList] =
        await Promise.all([popularMovieApi, topRateApi, upComingApi, genreApi]);
      // console.log("genre? ", genreList);

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

function getDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_DETAILS_REQUEST" });
      const selectMovieReviewsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      const selectMovieDetailsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const recommendationsMoviesApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      let [movieReviews, movieDetails, recommendations] = await Promise.all([
        selectMovieReviewsApi,
        selectMovieDetailsApi,
        recommendationsMoviesApi,
      ]);
      console.log("Review", recommendations);

      dispatch({
        type: "GET_DETAILS_SUCCESS",
        payload: {
          movieReviews: movieReviews,
          movieDetails: movieDetails,
          recommendations: recommendations,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_DETAILS_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getDetails,
};
