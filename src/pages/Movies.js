import React from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import MoviePageCards from "../components/MoviesPageCards";

const Movies = () => {
  const { popularMovies, loading3 } = useSelector((state) => state.movie);
  console.log(popularMovies);

  // if (loading3) {
  //   return (
  //     <div className="loading-spinner">
  //       <ClipLoader
  //         color="#ffff"
  //         loading={loading3}
  //         size={150}
  //         aria-label="Loading Spinner"
  //         data-testid="loader"
  //       />
  //     </div>
  //   );
  // }
  return (
    <div className="movies-page">
      <div className="select-container">
        <select>
          <option>옵션 1</option>
        </select>
        <select>
          <option>옵션 2</option>
        </select>
      </div>
      <ul className="movies-container">
        {popularMovies.results.map((item) => (
          <MoviePageCards item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
