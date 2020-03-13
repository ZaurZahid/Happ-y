import React from "react";
import classes from "./MovieLoading.css";

const MovieLoading = props => {
  let content = (
    <div className={classes.SmallMovieLoading}>
      <div className={classes.SmallMovieLoadingImg}></div>
      <div className={classes.SmallMovieLoadingBasics}>
        <h4 className={classes.SmallMovieLoadingName}></h4>
        <div className={classes.Imdb}>
          <i className="fa fa-star"></i>
          <div className={classes.ratingValue}></div>
        </div>
      </div>
    </div>
  );

  return <React.Fragment>{content}</React.Fragment>;
};

export default MovieLoading;
