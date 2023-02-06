import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/action/MovieAction";
import ClipLoader from "react-spinners/ClipLoader";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, movieReviews, loading2 } = useSelector(
    (state) => state.movie
  );
  // const reviewList = movieReviews.data;
  // console.log("movies???", reviewList);

  useEffect(() => {
    dispatch(movieAction.getDetails(id));
  }, []);

  if (loading2) {
    return (
      <ClipLoader
        color="#ffff"
        loading={loading2}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div className="details-page">
      {/* -- movie info section -- */}
      <div className="movie-info-section">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetails.data.poster_path}`}
        ></img>

        {/* - movie info container - */}
        <div className="movie-info-container">
          {/* section 1  (badge, title, info) */}
          <div className="genre-badge-box">
            {movieDetails.data.genres.map((item) => (
              <Badge bg="danger" key={item.id} className="genre-badges">
                {item.name}
              </Badge>
            ))}
          </div>
          <h1>{movieDetails.data.title}</h1>
          <div className="movie-info-items">
            <span>⭐{movieDetails.data.vote_average}</span>
            <span>👥{movieDetails.data.popularity}</span>
            <span>
              {movieDetails.data.adult ? "청소년 관람불가" : "청소년 관람가능"}
            </span>
          </div>

          {/* section 2 (overview) */}
          <div className="movie-overview">{movieDetails.data.overview}</div>

          {/* section 3 (release, budget, runtime) */}
          <div className="details-info-box">
            <div className="details-info-item">
              <Badge bg="danger">Release</Badge>
              <span className="badges">{movieDetails.data.release_date}</span>
            </div>
            <div>
              <Badge bg="danger">Budget</Badge>
              <span className="badges">{movieDetails.data.budget}</span>
            </div>
            <div>
              <Badge bg="danger">Runtime</Badge>
              <span className="badges">{movieDetails.data.runtime}</span>
            </div>
          </div>
          <div className="trailer">
            <img src="https://cdn-icons-png.flaticon.com/512/5344/5344733.png"></img>
            <span>Watch Trailer</span>
          </div>
        </div>
      </div>
      {/* -- other content container -- */}
      {/* <div className="other-content-container">
        <div className="tap-box">
          <div className="other-taps">REVIEWS</div>
          <div className="other-taps">RELATED MOVIES</div>
        </div>
        <div className="other-content-box"></div>
      </div> */}
      <div className="other-content-section">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab
            eventKey="home"
            title={`REVIEWS (${movieReviews.data.results.length})`}
            className="tab"
          >
            <div className="content-box">
              {movieReviews.data.results.map((item) => (
                <div className="review-box" key={item.id}>
                  <span className="user-id">{item.author}</span>
                  <span className="user-review">{item.content}</span>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="profile" title="RELATED MOVIES" className="tab">
            <div className="content-box">추천 영화에요</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MovieDetail;
