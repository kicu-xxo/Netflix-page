import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

// 1. 3개의 페이지 필요. 홈페이지, 영화 페이지, 영화 디테일 페이지

// 2. -- 홈페이지 --
//      -베너 O
//      -3가지 섹션의 영화 목록(인기, 높은 평점, 상영 예정) O
//          각 영화 카드에 hover시 5개의 정보 보여줌 (제목, 장르, 평점, 인기도, 시청가능 나이) O
//          섹션은 슬라이드로 넘기며 다른 영화들을 볼 수 있음 O

// 3. -- 영화 디테일 페이지 --
//      -선택한 영화의 정보를 보여줌 (포스터, 제목, 줄거리, 평점, 인기도, 시청가능 나이, 예산, 이익, 러닝타임 등등) O
//      -버튼을 누르면 예고편 시청 가능 (유튜브) O
//      -해당 영화의 리뷰 O
//      -해당 영화와 관련된 추천 영화 O

// 4. -- 영화 검색 가능 --
//      -검색된 영화 다양한 기준으로 정렬 가능
//      -검색된 영화 필터링 가능

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
