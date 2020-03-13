import { put, call, delay } from "redux-saga/effects";
import axios from "../../axios-happy";
import * as actions from "../actions";

const API = url => axios.get(url);
export function* initSingleMovieSaga(val) {

    yield put(actions.setStartItemMovie()); //SET_ITEM_VIDEO_START+++++++++
    // yield delay(1000) //wait
    try {
        const response = yield call(
            API,
            `/movies/${val.id}.json`
        ); /*  axios.get("/Movies.json") */
        // console.log(response);
        const data = {...response.data, id: val.id }; //id sini random gelen id ye beraber ele
        yield put(actions.setSuccessItemMovie(data));

    } catch (error) {
        yield put(actions.setErrorItemMovie());
    }
}

export function* updateSingleMovieHeartSaga(action) {
    try {
        yield axios.put(`/movies/${action.id}/heart.json`, action.hearted)
    } catch (error) {
        console.log(error);
    }
}

export function* updateSingleMovieMarkSaga(action) {
    try {
        yield axios.put(`/movies/${action.id}/mark.json`, action.marked)
    } catch (error) {
        console.log(error);
    }
}