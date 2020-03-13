import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* redux */
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";
import storiesReducer from "./store/reducers/stories";
import quotesReducer from "./store/reducers/quotes";
import statusQuotesReducer from "./store/reducers/statusQuotes";

import moviesReducer from "./store/reducers/movies";
import statusMovieReducer from "./store/reducers/statusMovies";
import singleMovieReducer from "./store/reducers/singleMovie";

import videosReducer from "./store/reducers/videos";
import statusVideoReducer from "./store/reducers/statusVideos";
import singleVideoReducer from "./store/reducers/singleVideo";

import eventsReducer from "./store/reducers/events";
import bestsReducer from "./store/reducers/bests";
import statusBestsReducer from "./store/reducers/statusBests";

import {
  /* watchStorySaga, */ watchQuoteSaga,
  watchVideoSaga,
  watchSingleVideoSaga,
  watchMoviesSaga,
  watchSingleMovieSaga,
  watchEventsSaga,
  watchBestsSaga
} from "./store/sagas";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/* reducers */
const rootReducer = combineReducers({
  stories: storiesReducer,

  quotes: quotesReducer,
  quoteStatus: statusQuotesReducer,

  videos: videosReducer,
  videoStatus: statusVideoReducer,
  singleVideo: singleVideoReducer,

  movies: moviesReducer,
  movieStatus: statusMovieReducer,
  singleMovie: singleMovieReducer,

  events: eventsReducer,

  bests: bestsReducer,
  bestStatus: statusBestsReducer,

});

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
  applyMiddleware(thunk, sagaMiddleware)
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(watchStorySaga);
sagaMiddleware.run(watchQuoteSaga);
sagaMiddleware.run(watchVideoSaga);
sagaMiddleware.run(watchSingleVideoSaga);
sagaMiddleware.run(watchMoviesSaga);
sagaMiddleware.run(watchSingleMovieSaga);
sagaMiddleware.run(watchEventsSaga);
sagaMiddleware.run(watchBestsSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
