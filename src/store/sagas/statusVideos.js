import { put, call, take, fork, delay } from "redux-saga/effects";
import axios from "../../axios-happy";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionsTypes";
import { fetchVideosStatus } from './api'

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) { //3 defe yoxla 
        try {
            yield put(actions.statsVideo(id)); // mene statusunu verir//400,200 ve s.
            yield delay(2000) //2 saniye gozle
            const response = yield call(fetchVideosStatus, id) //bu olandan sonra asagiya kec 
            yield put(actions.statsSuccessVideo(id, response.status));
            return true; //eger alindisa day tekrarlama return true ele  yeni KES
        } catch (error) {} //asagidaki funcada catmayacaq ama eger return false donderse funcda error donderir
    }
    yield put(actions.setErrorVideo(id)); //eger true dondermezse

    // yield call(actions.statsSuccessVideo, id)
    // console.log(id);
}

export function* statsVideoRequest() {
        while (true) {
            const { videos } = yield take(actionTypes.SET_LUCK_VIDEOS); //mene videos verir,videos yuklenende
            // console.log(videos);
            for (let i = 0; i < videos.length; i++) {
                // console.log(videos[i].id);
                //her biri eyni momentde paralel ise dusur
                yield fork(handleStatsRequest, videos[i].id); //functiona videos[i] ni gonderirem
            }
        }
    } //ama ee