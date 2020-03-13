import { put, call, take, fork, delay } from "redux-saga/effects";
import axios from "../../axios-happy";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionsTypes";
import { fetchBestItemsStatus } from "./api";

function* handleStatsRequest(id) {
    // console.log(id);
    for (let i = 0; i < 3; i++) {
        //3 defe yoxla
        try {
            yield put(actions.statsBest(id));
            yield delay(2000);
            const response = yield call(fetchBestItemsStatus, id);
            // console.log(response);
            yield put(actions.statsSuccessBest(id, response.status));
            return true;
        } catch (err) {}
        yield put(actions.statsErrorBest(id, response.status)); //eger true dondermezse
    }
}
export function* statsBestsRequest() {
    while (true) {
        const { items } = yield take(actionTypes.SET_BESTS_LUCK);
        const urls = [];
        for (const key in items) {
            urls.push(key);
        }
        // console.log(urls);
        for (let i = 0; i < urls.length; i++) {
            //her biri eyni momentde paralel ise dusur
            yield fork(handleStatsRequest, urls[i]); //icinde generator cagirdim
        }
    }
}