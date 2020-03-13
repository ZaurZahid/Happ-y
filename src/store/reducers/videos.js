import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    videos: [],
    error: false,
    loading: false
};
const setVideoStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setVideoSuccess = (state, action) => {
    return {
        ...state,
        videos: action.videos,
        loading: false,
        error: false
    };
};
const setVideoFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteVideos = (state, action) => {
    return {
        videos: [],
        error: false,
        loading: false
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_VIDEOS_START:
            return setVideoStart(state, action);
        case actionTypes.SET_LUCK_VIDEOS:
            return setVideoSuccess(state, action);
        case actionTypes.SET_VIDEOS_ERROR:
            return setVideoFail(state, action);
        case actionTypes.DELETE_VIDEOS:
            return deleteVideos(state, action);
        default:
            return state;
    }
};
export default reducer;