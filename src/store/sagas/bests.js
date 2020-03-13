import { put, call, delay } from 'redux-saga/effects'
import axios from "../../axios-happy";
import * as actions from '../actions'

const API = (url) => axios.get(url).then(res => res.data);

export function* initBestsSaga() {
    yield put(actions.setStartBests());

    try {
        const response = yield call(API, "/.json") /*  axios.get("/quotes.json") */
        Object.keys(response).forEach(key => {
            Object.keys(response[key]).forEach(i => {
                if (!response[key][i].heart || (response[key][i].heart && response[key][i].heart === false)) delete response[key][i];
            });
        });
        // console.log(response);
        yield put(actions.setLuckBests(response))


    } catch (error) { yield put(actions.setErrorBests()) }
}
export function* updateBestsHeartSaga(action) {
    try {
        yield axios.put(`/${action.url}/${action.id}/heart.json`, false)
        yield delay(1000)
        const response = yield call(API, "/.json") /*  axios.get("/quotes.json") */
        Object.keys(response).forEach(key => {
            Object.keys(response[key]).forEach(i => {
                if (!response[key][i].heart || (response[key][i].heart && response[key][i].heart === false)) delete response[key][i];
            });
        });
        // console.log(response);
        yield put(actions.setChangeBests(response));

    } catch (error) { console.log(error); }
}