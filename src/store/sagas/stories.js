import { put } from 'redux-saga/effects'
import axios from "../../axios-happy";
import * as actions from '../actions'
/* ISTIFADE ETMEYECEYIK BUNU CUNKI CUSR=TOM HOOKDAN ISTIFADE ETMISEM */
export function* initStoriesSaga() {
    yield put(actions.setStoriesStart());
    try {
        const response = yield axios.get("/luck-stories.json")
        var newStory = []; //convert {} to []
        for (let key in response.data) {
            newStory.push({
                ...response.data[key],
                id: key //keyi mutleq gotur cunku /story=jdjsdh  lazim olur
            });
            newStory.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); //idsi kicik olanla baslasin
            yield put(actions.setLuckStories(newStory)); //dispatcha funcdan gelen seyi gonderirem
        }
    } catch (error) {
        yield put(actions.setStoriesError())
    }
}