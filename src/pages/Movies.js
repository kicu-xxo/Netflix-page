import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import MoviePageCards from "../components/MoviesPageCards";
import Pagination from "../components/Pagination";
import { movieAction } from "../redux/action/MovieAction";

const Movies = () => {
  const { popularMovies, moviesList, loading3 } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10); //페이지 당 보여줄 게시물 수
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * limit; //페이지 당 첫 게시물 위치 계산

  let movieList = moviesList;
  console.log("searchList?", movieList);

  useEffect(() => {
    dispatch({ type: "MOVIES_LENDER" });
  }, []);

  const sorting = (eventKey) => {
    console.log(eventKey);
    if (eventKey === "desc") {
      console.log("movieList?", movieList);
      movieList = movieList.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    } else if (eventKey === "asc") {
      movieList = movieList.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    }
    // console.log("moviesList?", moviesList);
    dispatch(movieAction.getSort(movieList));
  };

  if (loading3) {
    return (
      <div className="loading-spinner">
        <ClipLoader
          color="#ffff"
          loading={loading3}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="movies-page">
        <div className="select-container">
          <DropdownButton
            id="dropdown-basic-button"
            title="Sort"
            variant="danger"
            menuVariant="dark"
            onSelect={(eventKey) => sorting(eventKey)}
          >
            <Dropdown.Item eventKey="desc">Popularity(desc)</Dropdown.Item>
            <Dropdown.Item eventKey="asc">Popularity(asc)</Dropdown.Item>
          </DropdownButton>
          {/* <select>
            <option>옵션 2</option>
          </select> */}
        </div>
        <ul className="movies-container">
          {moviesList.slice(offset, offset + limit).map((item) => (
            <MoviePageCards item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <Pagination
        total={moviesList.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Movies;
