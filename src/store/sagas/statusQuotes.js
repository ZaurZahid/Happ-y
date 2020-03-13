import { put, call, take, fork, delay } from "redux-saga/effects";
// import axios from "../../axios-happy";
import * as actions from "../actions";
import * as actionTypes from "../actions/actionsTypes";
import { fetchQuotesStatus } from './api'

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) { //3 defe yoxla 
        try {
            yield put(actions.statsQuote(id)); // mene statusunu verir//400,200 ve s.
            yield delay(2000) //2 saniye gozle
            const response = yield call(fetchQuotesStatus, id) //bu olandan sonra asagiya kec 
            yield put(actions.statsSuccessQuote(id, response.status));
            return true; //eger alindisa day tekrarlama return true ele  yeni KES
        } catch (error) {} //asagidaki funcada catmayacaq ama eger return false donderse funcda error donderir
    }
    yield put(actions.statsErrorQuote(id)); //eger true dondermezse

    // yield call(actions.statsSuccessQuote, id)
    // console.log(id);
}

export function* statsRequest() {
        while (true) {
            const { quotes } = yield take(actionTypes.SET_LUCK_QUOTES); //mene quotes verir,quotes yuklenende
            // console.log(quotes);
            for (let i = 0; i < quotes.length; i++) {
                // console.log(quotes[i].id);
                //her biri eyni momentde paralel ise dusur
                yield fork(handleStatsRequest, quotes[i].id); //functiona quotes[i] ni gonderirem
            }
        }
    } //ama ee