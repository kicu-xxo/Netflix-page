import React from "react";
import { useNavigate } from "react-router-dom";

// MovieDetail 페이지 하단 부분에 보여지는 추천 영화 카드 컴포넌트.
const RecommendationsCard = ({ item }) => {
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
