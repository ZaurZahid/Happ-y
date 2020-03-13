import { put, call, delay } from "redux-saga/effects";
import axios from "../../axios-happy";
import * as actions from "../actions";
import { initSpecialVideosSaga } from "./videos";

const API = url => axios.get(url);
//ITEM_VIDEO_START [] olanda ise dusur ve eger bu varsa asgidaki func olur+++++++++
export function* initSingleVideoSaga(val) {
    //val actionsdaki funcda yazdigimiz id dir
    //   console.log(val);
    yield put(actions.setStartItemVideo()); //SET_ITEM_VIDEO_START+++++++++
    // yield delay(1000) //wait
    try {
        const response = yield call(
            API,
            `/videos/${val.id}.json`
        ); /*  axios.get("/Videos.json") */
        const data = {...response.data, id: val.id }; //id sini random gelen id ye beraber ele
        //SET_LUCK_ITEM_VIDEO+++++
        yield put(actions.setSuccessItemVideo(data));

        yield initSpecialVideosSaga(val.id) //url-deki id den ferqlilerini gotur
            //=>SET_VIDEOS_START +++++
            //=> SET_LUCK_VIDEOS <<bu varsa forku ele>>+++++
            // => (STATS_VİDEO_BEGİN,STATS_LUCK_VIDEOS)+++++

        //gozlemeye ehtiyac yoxdu cunki,menimcun birinci single video gelib ,sonra =>asagidakilar luck olmalidir
    } catch (error) {
        yield put(actions.setErrorItemVideo());
    }
}
export function* updateSingleVideoHeartSaga(action) {
    try {
        yield axios.put(`/videos/${action.id}/heart.json`, action.hearted)
    } catch (error) {
        console.log(error);
    }
}

export function* updateSingleVideoMarkSaga(action) {
    try {
        yield axios.put(`/videos/${action.id}/mark.json`, action.marked)
    } catch (error) {
        console.log(error);
    }
}