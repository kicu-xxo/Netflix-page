import React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";

// MovieDetail 페이지 트레일러 영상 모달 내부 컴포넌트.
class Trailer extends React.Component {
  render() {
    const opts = {
      height: "520",
      width: "765",
      playerVars: {
        autoplay: 0,
        rel: 0,
      },
    };
    const { movieIds } = this.props;
    // console.log("movieId??", movieIds);

    // 여러 개의 official video중에 Official Trailer영상 객체 따로 담는 함수
    const trailerId = movieIds.data.results.filter(
      (item) => item.name == "Official Trailer"
    );
    // console.log("trailerId??", trailerId);

    if (trailerId[0]) {
      return (
        <YouTube
          videoId={trailerId[0].key}
          opts={opts}
          onReady={this._onReady}
        />
      );
    } else
      return <div className="not-found-massage">Trailer Video Not Found.</div>;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
const mapStateToProps = (state) => ({
  movieIds: state.movie.movieIds,
});

export default connect(mapStateToProps)(Trailer);
