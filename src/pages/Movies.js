import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import MoviePageCards from "../components/MoviesPageCards";
import Pagination from "../components/Pagination";
import Range from "../components/Range";
import { movieAction } from "../redux/action/MovieAction";

const Movies = () => {
  const { genreList, moviesList, loading3, date } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10); //페이지 당 보여줄 게시물 수
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * limit; //페이지 당 첫 게시물 위치 계산

  const [renderList, setRenderList] = useState(moviesList); //화면에 보여줄 리스트

  //개봉연도에 따라 영화 필터링하는 함수
  const filtering = () => {
    if (Array.isArray(moviesList)) {
      let filterMovie = moviesList.filter((item) => {
        let release = Number(item.release_date.slice(0, 4));
        return release >= date.min && date.max >= release;
      });
      setRenderList(filterMovie);
    }
    // console.log("testList?", filterMovie);
  };

  //인기순으로 정렬하는 하는 함수
  const sorting = (eventKey) => {
    let sort;
    if (eventKey === "desc") {
      // console.log("movieList?", moviesList);
      sort = moviesList.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    } else if (eventKey === "asc") {
      sort = moviesList.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    }
    setRenderList([...sort]);
  };

  //선택한 장르를 포함한 영화만 리스트에 남기는 함수
  const genreFiltering = (eventKey) => {
    // console.log(eventKey);
    let genres = moviesList.filter((item) => {
      return item.genre_ids.includes(Number(eventKey));
    });
    setRenderList(genres);
  };

  useEffect(() => {
    filtering();
  }, [date]);

  useEffect(() => {
    setRenderList(moviesList);
  }, [moviesList]);

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
          <div className="sort-dropdown">
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
          </div>
          <div className="genre-filter-dropdown">
            <DropdownButton
              id="dropdown-basic-button"
              title="Genre"
              variant="danger"
              menuVariant="dark"
              onSelect={(eventKey) => genreFiltering(eventKey)}
            >
              {genreList.map((item) => (
                <Dropdown.Item eventKey={item.id} key={item.id}>
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="filter-range">
            <p>Year Filter</p>
            <Range />
          </div>
        </div>
        <div>
          <div className="movies-view">
            {renderList == "" ? (
              <div className="not-found-movies">
                <div>Not Found Movies</div>
              </div>
            ) : (
              <ul className="movies-container">
                {Array.isArray(renderList) &&
                  renderList
                    .slice(offset, offset + limit)
                    .map((item) => (
                      <MoviePageCards item={item} key={item.id} />
                    ))}
              </ul>
            )}
          </div>
          <Pagination
            total={renderList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
