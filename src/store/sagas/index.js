import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionsTypes";

import { initQuotesSaga, updateHeartQuote } from "../sagas/quotes";
import { initVideosSaga } from "../sagas/videos";
import { initSingleVideoSaga, updateSingleVideoHeartSaga, updateSingleVideoMarkSaga } from "../sagas/singleVideo";
import { initMoviesSaga } from "../sagas/movies";
import { initSingleMovieSaga, updateSingleMovieHeartSaga, updateSingleMovieMarkSaga } from "../sagas/singleMovie";
import { initEventsSaga } from "../sagas/events";
import { initBestsSaga, updateBestsHeartSaga } from "../sagas/bests";

import { statsVideoRequest } from "../sagas/statusVideos";
import { statsRequest } from "../sagas/statusQuotes";
import { statsMovieRequest } from "../sagas/statusMovies";
import { statsBestsRequest } from "../sagas/statusBests";

export function* watchQuoteSaga() {
    yield all([
        takeEvery(actionTypes.QUOTE_START, initQuotesSaga),
        takeEvery(actionTypes.UPDATE_QUOTE_HEART, updateHeartQuote),
        statsRequest()
    ]);
}
export function* watchVideoSaga() {
    yield all([
        takeEvery(actionTypes.VİDEO_START, initVideosSaga),
        statsVideoRequest()
    ]);
}
export function* watchSingleVideoSaga() {
    yield takeEvery(actionTypes.ITEM_VIDEO_START, initSingleVideoSaga);
    yield takeEvery(actionTypes.UPDATE_ITEM_HEART_VIDEO, updateSingleVideoHeartSaga);
    yield takeEvery(actionTypes.UPDATE_ITEM_MARK_VIDEO, updateSingleVideoMarkSaga);
}
export function* watchMoviesSaga() {
    yield all([
        takeEvery(actionTypes.MOVIE_START, initMoviesSaga),
        statsMovieRequest()
    ]);
}
export function* watchSingleMovieSaga() {
    yield takeEvery(actionTypes.ITEM_MOVIE_START, initSingleMovieSaga);
    yield takeEvery(actionTypes.UPDATE_ITEM_HEART_MOVIE, updateSingleMovieHeartSaga);
    yield takeEvery(actionTypes.UPDATE_ITEM_MARK_MOVIE, updateSingleMovieMarkSaga);
}
export function* watchEventsSaga() {
    yield all([
        takeEvery(actionTypes.EVENT_START, initEventsSaga)
    ]);
}
export function* watchBestsSaga() {
    yield all([
        takeEvery(actionTypes.BESTS_INIT, initBestsSaga),
        takeEvery(actionTypes.UPDATE_BESTS_HEART, updateBestsHeartSaga),
        statsBestsRequest()
    ]);
}