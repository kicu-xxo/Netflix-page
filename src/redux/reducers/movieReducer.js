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
  moviesList: {},
  date: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    //Home.js
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true, loading3: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRateMovies: payload.topRateMovies,
        upcomingMovies: payload.upcomingMovies,
        movieDetails: payload.movieDetails,
        genreList: payload.genreList,
        moviesList: payload.popularMovies.results,
        loading: false,
        loading2: true,
        loading3: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false, loading3: false };

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

    case "GET_SEARCH_REQUEST":
      return { ...state, loading3: true };
    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        moviesList: payload.searchContents.data.results,
        loading3: false,
      };
    case "GET_SEARCH_FAILURE":
      return { ...state, loading3: false };

    case "GET_SORT_REQUEST":
      return { ...state, loading3: true };
    case "GET_SORT_SUCCESS":
      return {
        ...state,
        loading3: true,
        moviesList: payload.movieList,
        loading3: false,
      };
    case "GET_SORT_FAILURE":
      return { ...state, loading3: false };
    case "GET_DATE":
      return { ...state, date: payload.date };

    default:
      return { ...state };
  }
}
export default movieReducer;
