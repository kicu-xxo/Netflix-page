let initialState = {
  popularMovies: {},
  topRateMovies: {},
  upcomingMovies: {},
  movieDetails: {},
  loading: true,
  genreList: [],
  movieId: "",
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRateMovies: payload.topRateMovies,
        upcomingMovies: payload.upcomingMovies,
        movieDetails: payload.movieDetails,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIE_ID":
      return { ...state, movieId: payload.id };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
export default movieReducer;
