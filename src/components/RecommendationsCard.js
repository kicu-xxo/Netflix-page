import React from "react";
import { useSelector } from "react-redux";

const RecommendationsCard = () => {
  const { recommendations } = useSelector((state) => state.movie);
  console.log("recommendations?", recommendations.data.results);
  //   const movieList = recommendations.data.results;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${recommendations.data.results.backdrop_path}`}
      ></img>
    </div>
  );
};

export default RecommendationsCard;
