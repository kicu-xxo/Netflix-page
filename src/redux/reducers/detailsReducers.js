let initialState = {
  movieId: "",
  movieDetails: {},
};

function detailsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_DETAILS_SUCCESS":
      return { ...state };
    default:
      return { ...state };
  }
}

export default detailsReducer;
