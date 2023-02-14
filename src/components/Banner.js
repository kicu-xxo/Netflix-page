import React from "react";

// 홈 페이지에 보여지는 배너 컴포넌트.
// 현재 가장 인기있는 영화 포스터 1개를 보여줌
const Banner = ({ movie }) => {
  // console.log({ movie });
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
    >
      <div className="banner-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
