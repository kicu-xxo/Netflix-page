import React from "react";
import { useLocation, useParams } from "react-router-dom";

const MovieDetail = () => {
  let { id } = useParams();
  const location = useLocation();
  const movies = location.state.movies.item;
  console.log("movies???", movies);

  return <h1>{movies.title}</h1>;
};

export default MovieDetail;
