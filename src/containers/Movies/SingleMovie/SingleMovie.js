import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";
import classes from "./SingleMovie.css";
import axios from "../../../axios-happy";
import {
  initItemMovie,
  deleteSingleMovieFromStore,
  updateHeartMovie,
  updateMarkMovie
} from "../../../store/actions";
const SingleMovie = props => {
  const [play, setPlay] = useState(false);
  const [more, setMore] = useState(false);
  // const [heart, setHeart] = useState(false);

  useEffect(() => {
    const url_id = props.match.params.movie;
    props.fetchMovie(url_id);
  }, []);
  //   useEffect(() => console.log("mount"), []);//didMount
  //   useEffect(() =>()=> console.log("mount"), []);//didUnmount tezeden bosalanda

  useEffect(() => {
    return () => {
      //   console.log("unmount");
      props.deletingSingleMovieFromStore(); //hemde basqa page -e kecende ele
    };
  }, []);

  const goBackPreviosPage = () => {
    //   console.log(props);
    props.history.replace(`/movies`);
  };

  const hearted = (id, val) => {
    props.updateHeart(id, val);
  };
  const marked = (id, val) => {
    props.updateMark(id, val);
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
    const movie_id = url.slice(url.length - 11);
    // console.log(movie_id);
    newUrl = `https://www.youtube.com/embed/${movie_id}`;
    return newUrl;
    // https://www.youtube.com/watch?v=Tdd_RXXyWMc bunu asagidaki kimi goster
    /* "https://www.youtube.com/embed/Tdd_RXXyWMc" */
  };
  let movieSummary = (
    <div className={classes.SingleMovie}>
      <React.Fragment>
        {play ? <Backdrop show={play} clicked={() => setPlay(false)} /> : ""}
        <div className={classes.SingleMovie_Img}>
          {!play ? (
            <img
              className={classes.SingleMovie_Img}
              src={props.movie.picture}
              alt=""
            />
          ) : (
            <iframe
              /*  width="560" height="315"  */ src={fetchUrl(
                props.movie.trailer_video
              )}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {!play ? (
            <React.Fragment>
              <i
                onClick={() =>
                  marked(props.match.params.movie, !props.movie.mark)
                }
                className={
                  props.movie.mark ? "fas fa-bookmark" : "far fa-bookmark"
                }
                id={classes.mark}
              ></i>
              <i
                className="fas fa-play-circle"
                onClick={played}
                // className={mark ? "fas fa-bookmark" : "far fa-bookmark"}
                id={classes.play}
              ></i>
              <div className={classes.Imdb}>
                <i className="fa fa-star"></i>
                <div className={classes.ratingValue}>
                  <strong title={props.movie.imdb}>
                    <span>{props.movie.imdb}</span>
                  </strong>
                  <span className={classes.grey}>/</span>
                  <span className={classes.bestRating}>10</span>
                </div>
              </div>
            </React.Fragment>
          ) : null}
        </div>

        <div className={classes.MovieContent}>
          <h6 className={classes.MovieName}>{props.movie.name}</h6>
          <h6 className={classes.Tags}>{props.movie.tags}</h6>
          <div className={classes.MovieActions}>
            <i
              className="fas fa-heart"
              onClick={() =>
                hearted(props.match.params.movie, !props.movie.heart)
              }
              className={props.movie.heart ? "fas fa-heart" : "far fa-heart"}
            ></i>
            <i className="fas fa-share-alt"></i>
          </div>
          <p className={classes.Content}>
            {props.movie.desc && !more
              ? cutText(props.movie.desc, 100)
              : props.movie.desc}
            {props.movie.desc &&
            cutText(props.movie.desc, 100).includes("...") ? (
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
        <div className={classes.Link}>
          <h4 className={classes.Auth}>Link</h4>
          <a href="" className={classes.MovieLink}>
            <h4>{props.movie.link}</h4>
          </a>
          <hr />
        </div>
        <Button btnType="Success" clicked={goBackPreviosPage}>
          Back
        </Button>
      </React.Fragment>
    </div>
  );

  if (props.loading) {
    movieSummary = props.error ? (
      <h4>SingleMovie Cant be loaded</h4>
    ) : (
      <Spinner />
    );
  }

  return <React.Fragment>{movieSummary}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    movie: state.singleMovie.movieItem,
    error: state.singleMovie.error,
    loading: state.singleMovie.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchMovie: id => dispatch(initItemMovie(id)),
    deletingSingleMovieFromStore: id =>
      dispatch(deleteSingleMovieFromStore(id)),
    updateHeart: (id, val) => dispatch(updateHeartMovie(id, val)),
    updateMark: (id, val) => dispatch(updateMarkMovie(id, val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(SingleMovie, axios));
