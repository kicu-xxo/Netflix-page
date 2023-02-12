import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

//TMDB에서 API 가져오는 함수
//웹이 실행됨과 동시에 실행됨 (Home.js에서 실행)
//인기, 높은 평점, 상영 예정 영화 리스트와 장르 리스트 불러옴
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRateApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upComingApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRateMovies, upcomingMovies, genreList] =
        await Promise.all([popularMovieApi, topRateApi, upComingApi, genreApi]);
      // console.log("genre? ", genreList);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRateMovies: topRateMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

//TMDB에서 API 가져오는 함수
//영화의 디테일 페이지로 들어가면 실행됨 (MovieDetail.js에서 실행됨)
//리뷰, 상세 정보, 추천 영화 리스트, 트레일러 영상에 필요한 ID를 불러옴
function getDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_DETAILS_REQUEST" });
      const selectMovieReviewsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      const selectMovieDetailsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const recommendationsMoviesApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      const movieIdsApi = api.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      let [movieReviews, movieDetails, recommendations, movieIds] =
        await Promise.all([
          selectMovieReviewsApi,
          selectMovieDetailsApi,
          recommendationsMoviesApi,
          movieIdsApi,
        ]);
      console.log("Review", movieIds);

      dispatch({
        type: "GET_DETAILS_SUCCESS",
        payload: {
          movieReviews: movieReviews,
          movieDetails: movieDetails,
          recommendations: recommendations,
          movieIds: movieIds,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_DETAILS_FAILURE" });
    }
  };
}

//TMDB에서 API 가져오는 함수
//검색어를 입력 시 실행됨 (Navigation.js에서 실행됨)
//검색어가 포함된 영화 리스트를 불러옴
function getSearch(searchKeyword) {
  return async (dispatch) => {
      dispatch({ type: "GET_SEARCH_REQUEST" });
      const getSearchApi = await api.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchKeyword}`
      );

      let [searchContents] = [getSearchApi];
      console.log("search?", searchContents);
      console.log("search?", searchKeyword);
      dispatch({
        type: "GET_SEARCH_SUCCESS",
        payload: { searchContents: searchContents },
      });
  };
}

function getSort(movieList) {
  return (dispatch) => {
    try {
      dispatch({ type: "GET_SORT_REQUEST" });
      dispatch({ type: "GET_SORT_SUCCESS", payload: { movieList: movieList } });
    } catch (error) {
      dispatch({ type: "GET_SORT_FAILURE" });
    }
  };
}

export const movieAction = {
  getMovies,
  getDetails,
  getSearch,
  getSort,
};
