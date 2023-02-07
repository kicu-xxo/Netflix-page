import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/action/MovieAction";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upcomingMovies, loading } = useSelector(
    (state) => state.movie
  );
  // console.log("home", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader
          color="#ffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div className="home-page">
      <Banner movie={popularMovies.results[0]} />

      <h1 className="movie-slide-title">Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1 className="movie-slide-title">TopRate Movie</h1>
      <MovieSlide movies={topRateMovies} />
      <h1 className="movie-slide-title">Upcoming Movie </h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};

export default Home;
