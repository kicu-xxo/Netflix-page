import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

// 홈 페이지의 영화 리스트 슬라이더 컴포넌트.
// npm download : https://www.npmjs.com/package/react-multi-carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieSlide = ({ movies }) => {
  return (
    <div className="movie-slide">
      <Carousel responsive={responsive}>
        {movies.results.map((item) => (
          <MovieCard item={item} key={item.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
