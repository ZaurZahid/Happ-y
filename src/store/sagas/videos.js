import { put, call, delay } from 'redux-saga/effects'
import axios from "../../axios-happy";
import * as actions from '../actions'

const API = (url) => axios.get(url);

export function* initVideosSaga() {
    yield put(actions.setStartVideo());
    // yield delay(3000)
    try {
        const response = yield call(API, "/videos.json") /*  axios.get("/Videos.json") */
        let newVideo = [];
        for (let key in response.data) {
            newVideo.push({
                ...response.data[key],
                id: key
            });
        }
        newVideo = newVideo.slice(0, 3); //3dene gotur cemi
        newVideo.sort(function(a, b) {
            var heart1 = a.heart,
                heart2 = b.heart
            if (heart1 === true) //sort string ascending
                return -1
            if (heart1 === false)
                return 1
            return 0 //default return value (no sorting) 
        })
        yield put(actions.setSuccessVideo(newVideo));
    } catch (error) {
        yield put(actions.setErrorVideo())
    }
}


export function* initSpecialVideosSaga(except_id) { /* adj23nkas */
    yield put(actions.setStartVideo());
    // yield delay(3000)
    try {
        const response = yield call(API, "/videos.json") /*  axios.get("/Videos.json") */
        let newVideo = [];
        for (let key in response.data) {
            newVideo.push({
                ...response.data[key],
                id: key
            });
        }
        newVideo = newVideo.filter(e => e.id !== except_id); //url-dekinden ferqlisini gotur
        newVideo = newVideo.slice(0, 2); //2dene gotur cemi
        // console.log(except_id);
        yield put(actions.setSuccessVideo(newVideo));
    } catch (error) {
        yield put(actions.setErrorVideo())
    }
}