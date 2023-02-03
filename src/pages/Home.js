import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import { movieAction } from "../redux/action/MovieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRateMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  );
};

export default Home;
