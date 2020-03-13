import { put, call, take, fork, delay } from "redux-saga/effects";
// import axios from "../../axios-happy";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionsTypes";
import { fetchMoviesStatus } from "./api";

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        //3 defe yoxla
        try {
            yield put(actions.statsMovie(id));
            yield delay(2000);
            const response = yield call(fetchMoviesStatus, id);
            // console.log(response);
            yield put(actions.statsSuccessMovie(id, response.status));
            return true;
        } catch (err) {}
        yield put(actions.statsErrorMovie(id, response.status)); //eger true dondermezse
    }
}
export function* statsMovieRequest() {
    while (true) {
        const { movies } = yield take(actionTypes.SET_LUCK_MOVIES);
        for (let i = 0; i < movies.length; i++) {
            //her biri eyni momentde paralel ise dusur
            yield fork(handleStatsRequest, movies[i].id); //icinde generator cagirdim
        }
    }
}