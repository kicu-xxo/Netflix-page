import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MoviesPageCards = ({ item }) => {
  // console.log({ item });
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w342${item.poster_path}` +
          ")",
      }}
      className="movies-page-cards"
    >
      <div className="movie-info-container">
        <div className="title-box">
          <img
            src={`https://www.themoviedb.org/t/p/w342${item.poster_path}`}
          ></img>

          <div>
            <h1>{item.title}</h1>
            <p>{item.release_date}</p>
          </div>
        </div>

        <div className="badges">
          {item.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        <p className="overview">{item.overview}</p>
        <div className="other-info-box">
          <span>⭐{item.vote_average}</span>
          <span>👥{item.popularity}</span>
          <span>{item.adult ? "청소년 관람불가" : "청소년 관람가능"}</span>
        </div>
      </div>
    </div>
  );
};

export default MoviesPageCards;
