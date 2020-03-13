import { put, call, delay } from "redux-saga/effects";
import axios from "../../axios-happy";
import * as actions from "../actions";

const API = url => axios.get(url);

export function* initMoviesSaga() {
    yield put(actions.setStartMovies());
    try {
        const response = yield call(API, "/movies.json")
        let newMovies = [];
        for (let key in response.data) {
            newMovies.push({
                ...response.data[key],
                id: key
            });
        }
        newMovies = newMovies.slice(0, 5); //3dene gotur cemi
        newMovies.sort(function(a, b) {
            var heart1 = a.heart,
                heart2 = b.heart
            if (heart1 === true) //sort string ascending
                return -1
            if (heart1 === false)
                return 1
            return 0 //default return value (no sorting)
                /*  var heart1 = a.heart,
                    heart2 = b.heart
                console.log(heart1, heart2)
                if (heart1 > heart2) //sort string ascending
                    return -1
                if (heart2 > heart1)
                    return 1
                return 0 //default return value (no sorting) */
        })
        yield put(actions.setSuccessMovies(newMovies));
    } catch (error) {
        yield put(actions.setErrorMovies())
    }

}