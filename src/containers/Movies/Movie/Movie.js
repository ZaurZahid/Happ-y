import React from "react";
import classes from "./Movie.css";
import MovieLoading from "../MovieLoading/MovieLoading";

const Movie = props => {
  const cutText = (text, num) => {
    let newText = "";
    if (text.length > num) {
      newText = text.substr(0, num) + "...";
    } else {
      newText = text;
    }
    return newText;
  };
  let content = (
    <div
      className={classes.SmallMovie}
      key={props.id}  onClick={props.goToMovie}
    >
      <img className={classes.SmallMovieImg} src={props.picture} alt="" />
      <div className={classes.SmallMovieBasics}>
        <h4 className={classes.SmallMovieName}>{cutText(props.name, 20)}</h4>
        <div className={classes.Imdb}>
          <i className="fa fa-star"></i>
          <div className={classes.ratingValue}>
            <strong title={props.imdb}>
              <span>{props.imdb}</span>
            </strong>
            <span className={classes.grey}>/</span>
            <span className={classes.bestRating} >
              10
            </span> 
          </div>
        </div>
      </div>
    </div>
  );
  if (  typeof props.status === "object" &&  props.status.isLoading && props.status.downloads === null  ) {
    content = <MovieLoading/> 
      }
  return <React.Fragment>{content}</React.Fragment>;
};

export default Movie;
