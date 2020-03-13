import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import classes from "./SingleVideo.css";
import axios from "../../../axios-happy";
import SmallVideo from "../SmallVideo/SmallVideo";
import {
  initItemVideo,
  deleteSingleVideoFromStore,
  deletingVideosStatusFromStore,
  deletingVideosFromStore,
  updateHeartVideo,
  updateMarkVideo
} from "../../../store/actions";

const SingleVideo = props => {  
  const [more, setMore] = useState(false);
  const [play, setPlay] = useState(false);
  const [download, setDownload] = useState(false);

  useEffect(() => {
    const url_id = props.match.params.video;
    props.fetchVideo(url_id);
  }, []);
  //   useEffect(() => console.log("mount"), []);//didMount
  //   useEffect(() =>()=> console.log("mount"), []);//didUnmount tezeden bosalanda

  useEffect(() => {
    return () => {
      // console.log("unmount");
      props.deletingVideosStore(); //current video su temizle
      props.deletingStatusFromStore(); //current statuslari temizle
      props.deletingFromStore(); //current videonu temizle
    };
  }, []);

  const goBackPreviosPage = () => {
    //   console.log(props);
    props.history.replace(`/videos`);
  };
  const marked = (id, val) => {
    props.updateMarkVid(id, val);
  };
  const hearted = (id, val) => {
    props.updateHeartVid(id, val);
  };
  const downloaded = () => {
    setDownload(!download);
  };
  const played = () => {
    setPlay(!play);
  };
  const cutText = (text, num) => {
    let newText = "";
    if (text.length > num) {
      newText = text.substr(0, num) + "...";
    } else {
      newText = text;
    }
    return newText;
  };
  const fetchUrl = url => {
    // console.log(url);
    let newUrl = "";
    const video_id = url.slice(url.length - 11);
    // console.log(video_id);
    newUrl = `https://www.youtube.com/embed/${video_id}`;
    return newUrl;
    // https://www.youtube.com/watch?v=Tdd_RXXyWMc bunu asagidaki kimi goster
    /* "https://www.youtube.com/embed/Tdd_RXXyWMc" */
  };
  const goToVideo = index => {
    //burda deleteler qalir cunki ancaq id-ler deyisir
    props.deletingVideosStore(); //current video su temizle
    props.deletingStatusFromStore(); //current statuslari temizle
    props.deletingFromStore(); //current videonu temizle
    props.history.push(`/videos/${index}`); //url
    props.fetchVideo(index); //tezeden baslat
    // console.log(props);
  };
  let videoSummary = (
    <div className={classes.SingleVideo}>
      <React.Fragment>
        {play ? <Backdrop show={play} clicked={() => setPlay(false)} /> : ""}
        <div className={classes.SingleVideo_Img}>
          {!play ? (
            <img
              /* className={classes.SingleVideo_Img} */ src={props.video.img}
              alt=""
            />
          ) : (
            ""
          )}
          {/* props.vide.video="https://www.youtube.com/embed/Tdd_RXXyWMc */}
          {/* {const a=}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Tdd_RXXyWMc" </iframe> */}
          {play ? (
            <iframe
              /*  width="560" height="315"  */ src={fetchUrl(props.video.video)}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}
          {!play ? (
            <i
              onClick={()=>marked(props.match.params.video,!props.video.mark)}
              className={props.video.mark ? "fas fa-bookmark" : "far fa-bookmark"}
              id={classes.mark}
            ></i>
          ) : null}
          {!play ? (
            <i
              className="fas fa-play-circle"
              onClick={played}
              // className={mark ? "fas fa-bookmark" : "far fa-bookmark"}
              id={classes.play}
            ></i>
          ) : (
            ""
          )}
        </div>

        <div className={classes.VideoContent}>
          <h6 className={classes.AuthorName}>{props.video.author} </h6>
          <h4 className={classes.VideoName}>{props.video.name} </h4>
          <h6 className={classes.Date}>{props.video.date}</h6>
          <div className={classes.VideoActions}>
            <i
              className="fas fa-heart"
              onClick={()=>hearted(props.match.params.video,!props.video.heart)}
              className={props.video.heart ? "fas fa-heart" : "far fa-heart"}
            ></i>
            <i
              onClick={downloaded}
              className={
                download ? "fas fa-cloud-download-alt" : "fas fa-download"
              }
            ></i>
            <i className="fas fa-share-alt"></i>
            {/* paylas */}
          </div>
          <p className={classes.Content}>
            {props.video.desc && !more
              ? cutText(props.video.desc, 480)
              : props.video.desc}
            {props.video.desc &&
            cutText(props.video.desc, 480).includes("...") ? (
              !more ? (
                <span onClick={() => setMore(true)}>Read More</span>
              ) : (
                <span onClick={() => setMore(false)}>Read Less</span>
              )
            ) : (
              ""
            )}
          </p>
          <hr />
        </div>
        <div className={classes.AuthorContent}>
          <h4 className={classes.Auth}>Author</h4>
          <div className={classes.Author}>
            <img
              src={props.video.author_img}
              alt="author image"
              className={classes.AuthorImg}
            />
            <div className={classes.AuthorHeading}>
              <h4 className={classes.AuthorName}>{props.video.author}</h4>
              <h6 className={classes.AuthorMajor}>
                {props.video.author_major}
              </h6>
            </div>
          </div>
          <div className={classes.AuthorDesc}>
            <p className={classes.AuthContent}>
              {props.video.author_desc
                ? cutText(props.video.author_desc, 180)
                : ""}
            </p>
          </div>
          <hr />
        </div>
        <div className={classes.SmallVideoContent}>
          <h4 className={classes.Auth}>Watch after this</h4>
          {props.allVideos.map((el, index) =>
            //  console.log(index)
            props.stats[el.id] && el.id !== props.match.params.video ? (
              <SmallVideo
                key={el.id}
                img={el.img}
                name={el.name}
                author={el.author}
                status={props.stats[el.id]}
                goToVideo={() => goToVideo(el.id)}
              />
            ) : (
              ""
            )
          )}
        </div>

        <Button btnType="Success" clicked={goBackPreviosPage}>
          Back
        </Button>
      </React.Fragment>
    </div>
  );

  if (props.loading) {
    videoSummary = props.error ? (
      <h4>SingleVideo Cant be loaded</h4>
    ) : (
      <Spinner />
    );
  }

  return <React.Fragment>{videoSummary}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    video: state.singleVideo.videoItem,
    error: state.singleVideo.error,
    loading: state.singleVideo.loading,
    /* new  for small*/
    allVideos: state.videos.videos,
    stats: state.videoStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchVideo: id => dispatch(initItemVideo(id)),
    deletingFromStore: id => dispatch(deleteSingleVideoFromStore(id)),
    deletingStatusFromStore: () => dispatch(deletingVideosStatusFromStore()),
    deletingVideosStore: () => dispatch(deletingVideosFromStore()),
    updateMarkVid:(id, val) => dispatch(updateMarkVideo(id, val)),
    updateHeartVid: (id, val) => dispatch(updateHeartVideo(id, val)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SingleVideo, axios));
