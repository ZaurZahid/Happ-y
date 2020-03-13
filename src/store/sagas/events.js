import { put, call } from 'redux-saga/effects'
import axios from "../../axios-happy";
import * as actions from '../actions'

const API = (url) => axios.get(url);

export function* initEventsSaga() {
    yield put(actions.setStartEvent());
    try {
        const response = yield call(API, "/events.json") /*  axios.get("/quotes.json") */
        const newEvents = [];
        for (let key in response.data) {
            newEvents.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.setSuccessEvent(newEvents));
    } catch (error) {
        yield put(actions.setErrorEvent())
    }
}