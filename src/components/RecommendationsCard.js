import React from "react";
import { useNavigate } from "react-router-dom";

const RecommendationsCard = ({ item }) => {
  //   const movieList = recommendations.data.results;
  const navigate = useNavigate();
  const goDetails = () => {
    navigate(`/movies/${item.id}`);
    window.location.reload();
  };

  return (
    <li className="recommendations-items" onClick={goDetails}>
      <img
        className="recommendations-movies-img"
        key={item.id}
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
      ></img>
    </li>
  );
};

export default RecommendationsCard;
