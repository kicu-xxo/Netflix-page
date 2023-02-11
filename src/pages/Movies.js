import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import MoviePageCards from "../components/MoviesPageCards";
import Pagination from "../components/Pagination";

const Movies = () => {
  const { popularMovies, searchList, loading3 } = useSelector(
    (state) => state.movie
  );
  console.log(popularMovies);
  console.log("searchList?", searchList);
  const [limit, setLimit] = useState(10); //페이지 당 보여줄 게시물 수
  const [page, setPage] = useState(1); //현재 페이지 번호
  const offset = (page - 1) * limit; //페이지 당 첫 게시물 위치 계산

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
          <select>
            <option>옵션 1</option>
          </select>
          <select>
            <option>옵션 2</option>
          </select>
        </div>
        <ul className="movies-container">
          {searchList.results.slice(offset, offset + limit).map((item) => (
            <MoviePageCards item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <Pagination
        total={searchList.results.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Movies;
