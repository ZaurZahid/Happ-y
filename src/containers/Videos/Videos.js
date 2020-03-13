import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import SortBy from "../../components/UI/SortBy/SortBy";

import Video from "./Video/Video";

import axios from "../../axios-happy";

import classes from "./Videos.css";
import {
  initVideos,
  deletingVideosStatusFromStore,
  deletingVideosFromStore
} from "../../store/actions"; /* action */

const Videos = props => {
  useEffect(() => {
    props.onInitVideos();
  }, []);

  useEffect(() => {//unmount olanda
    return () => {
      setTimeout(() => {
        // console.log("unmount");
        props.deletingVideosStore(); //current video su temizle
        props.deletingStatusFromStore(); //current statuslari temizle
      }, 4000);
    };
  }, []);
  const goToVideo = index => {
    props.history.replace(`/videos/${index}`);
    // console.log(props);
  };
  let videoSummary = (
    <div className={classes.mainBoxes}>
      {props.videos.map(video => (
        <Video
          key={video.id}
          name={video.name}
          img_url={video.img}
          author_img={video.author_img}
          author={video.author}
          video={video.author}
          status={props.stats[video.id]}
          goToVideo={() => goToVideo(video.id)}
        />
      ))}
    </div>
  );
  if (props.loading) {
    videoSummary = props.error ? <h4>Videos Cant be loaded</h4> : <Spinner />;
  }
  return (
    <React.Fragment>
      <SortBy />
      <h3 className={classes.Heading}>Videos</h3>
      {videoSummary}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos.videos,
    error: state.videos.error,
    loading: state.videos.loading,
    stats: state.videoStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitVideos: () => dispatch(initVideos()),
    deletingStatusFromStore: () => dispatch(deletingVideosStatusFromStore()),
    deletingVideosStore: () => dispatch(deletingVideosFromStore())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Videos, axios));
