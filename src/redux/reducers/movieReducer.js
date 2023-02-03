let initialState = {
  popularMovies: {},
  topRateMovies: {},
  upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRateMovies: payload.topRateMovies,
        upcomingMovies: payload.upcomingMovies,
      };
    default:
      return { ...state };
  }
}
export default movieReducer;
