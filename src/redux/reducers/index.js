import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";

export default combineReducers({
  movie: movieReducer,
});
