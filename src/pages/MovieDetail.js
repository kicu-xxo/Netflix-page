import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { movieAction } from "../redux/action/MovieAction";

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const genreList = useSelector((state) => state.movie.genreList);
  const location = useLocation();
  const movies = location.state.movies.item;
  console.log("movies???", movies);

  const getMovieDetails = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("details?", data);
    setDetails(data);
  };

  useEffect(() => {
    getMovieDetails();
    dispatch(movieAction.getMovieId(id));
  }, [id]);

  return (
    <div className="details-page">
      {/* -- movie info section -- */}
      <div className="movie-info-section">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies.poster_path}`}
        ></img>

        {/* - movie info container - */}
        <div className="movie-info-container">
          {/* section 1  (badge, title, info) */}
          <div className="genre-badge-box">
            {movies.genre_ids.map((id) => (
              <Badge bg="danger" key={id} className="genre-badges">
                {genreList.find((item) => item.id == id).name}
              </Badge>
            ))}
          </div>
          <h1>{movies.title}</h1>
          <div className="movie-info-items">
            <span>⭐{movies.vote_average}</span>
            <span>👥{movies.popularity}</span>
            <span>{movies.adult ? "청소년 관람불가" : "청소년 관람가능"}</span>
          </div>

          {/* section 2 (overview) */}
          <div className="movie-overview">{movies.overview}</div>

          {/* section 3 (release, budget, runtime) */}
          <div className="details-info-box">
            <div className="details-info-item">
              <Badge bg="danger">Release</Badge>
              <span className="badges">{movies.release_date}</span>
            </div>
            <div>
              <Badge bg="danger">Budget</Badge>
              <span className="badges">{details.budget}</span>
            </div>
            <div>
              <Badge bg="danger">Runtime</Badge>
              <span className="badges">{details.runtime}</span>
            </div>
          </div>
          <div className="trailer">
            <img src="https://cdn-icons-png.flaticon.com/512/5344/5344733.png"></img>
            <span>Watch Trailer</span>
          </div>
        </div>

        {/* -- other content container -- */}
        <div className="other-content-container">
          <div>
            <div>REVIEWS</div>
            <div>RELATED MOVIES</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
