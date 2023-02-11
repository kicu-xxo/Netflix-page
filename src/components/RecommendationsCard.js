import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendationsCard = ({ item }) => {
  //   const movieList = recommendations.data.results;
  const navigate = useNavigate();

  return (
    <li className="recommendations-items">
      <img
        className="recommendations-movies-img"
        key={item.id}
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
      ></img>
    </li>
  );
};

export default RecommendationsCard;
