import { put, call, delay } from 'redux-saga/effects'
import axios from "../../axios-happy";
import * as actions from '../actions'

const API = (url) => axios.get(url);

export function* initQuotesSaga() {
    yield put(actions.setStartQuote());
    // yield delay(3000)
    try {
        const response = yield call(API, "/quotes.json") /*  axios.get("/quotes.json") */
        const newQuotes = [];
        for (let key in response.data) {
            newQuotes.push({
                ...response.data[key],
                id: key
            });
        }
        newQuotes.sort(function(a, b) {
            var heart1 = a.heart,
                heart2 = b.heart
            if (heart1 === true) //sort string ascending
                return -1
            if (heart1 === false)
                return 1
            return 0 //default return value (no sorting) 
        })
        yield put(actions.setSuccessQuote(newQuotes));
    } catch (error) {
        yield put(actions.setErrorQuote())
    }
}
export function* updateHeartQuote(action) {
    try {
        yield axios.put(`/quotes/${action.id}/heart.json`, action.hearted)
            /* again get data and change in state */
        const response = yield call(API, "/quotes.json") /*  axios.get("/quotes.json") */
        const newQuotes = [];
        for (let key in response.data) {
            newQuotes.push({
                ...response.data[key],
                id: key
            });
        }
        newQuotes.sort(function(a, b) {
            var heart1 = a.heart,
                heart2 = b.heart
            if (heart1 === true) //sort string ascending
                return -1
            if (heart1 === false)
                return 1
            return 0 //default return value (no sorting) 
        })
        yield put(actions.setChangeQuote(newQuotes));
    } catch (error) {
        console.log(error);
    }
}