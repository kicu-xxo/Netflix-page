import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  const goDetails = () => {
    navigate(`/Movies/${item.id}`);
  };

  const { genreList } = useSelector((state) => state.movie);

  return (
    <div
      onClick={goDetails}
      className="cards"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <div className="movie-info">
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청소년 관람불가" : "청소년 관람가능"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
