let initialState = {
  popularMovies: {},
  topRateMovies: {},
  upcomingMovies: {},
  loading: true,
  loading2: true,
  loading3: true,
  genreList: [],
  movieReviews: {},
  movieDetails: {},
  recommendations: {},
  movieIds: {},
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
        loading2: true,
        loading3: true,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    case "GET_DETAILS_REQUEST":
      return { ...state, loading2: true };
    case "GET_DETAILS_SUCCESS":
      return {
        ...state,
        movieReviews: payload.movieReviews,
        movieDetails: payload.movieDetails,
        recommendations: payload.recommendations,
        movieIds: payload.movieIds,
        loading2: false,
      };
    case "GET_DETAILS_FAILURE":
      return { ...state, loading2: false };
    default:
      return { ...state };
    case "GET_MOVIES_PAGE_REQUEST":
      return { ...state, loading3: true };
    case "GET_MOVIES_PAGE_SUCCESS":
      return { ...state, loading3: false };
  }
}
export default movieReducer;
