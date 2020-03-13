import React, { useEffect } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import Movie from "./Movie/Movie";
import axios from "../../axios-happy";
import classes from "./Movies.css";
import {
  initMovies,
  deletingMoviesStatusFromStore,
  deletingMoviesFromStore
} from "../../store/actions"; /* action */

const Movies = props => {

  useEffect(() => {
    props.onInitMovies();
  }, []);

 useEffect(() => {//unmount olanda
   return ()=>{
     setTimeout(() => {
       props.deletingMovieStore(); //current Movie-si temizle
       props.deletingMovieStatusFromStore(); //current statuslari temizle
     }, 3500);//bunu elemesem seifeye girib basqa sehifeye atan kimi (loadingde) sehv gedir
   }
  }, []);

  const goToMovie = index => { 
    props.history.push(`/movies/${index}`);
    // console.log(props);
  };
  let MovieSummary = (
    <div className={classes.mainBoxes}>
      {props.movies.map(movie => (
        <Movie
          key={movie.id}
          name={movie.name}
          picture={movie.picture}
          imdb={movie.imdb}
          status={props.stats[movie.id]}
          goToMovie={() => goToMovie(movie.id)}
        />
      ))}
    </div>
  );
  if (props.loading) {
    MovieSummary = props.error ? <h4>Movies Cant be loaded</h4> : <Spinner />;
  }
  return (
    <React.Fragment>
      <h3 className={classes.Heading}>Movies</h3>
      {MovieSummary}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    error: state.movies.error,
    loading: state.movies.loading,
    stats: state.movieStatus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onInitMovies: () => dispatch(initMovies()),
    deletingMovieStatusFromStore: () => dispatch(deletingMoviesStatusFromStore()),
    deletingMovieStore: () => dispatch(deletingMoviesFromStore())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Movies, axios));
