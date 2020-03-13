import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    id: null,
    error: false,
    loading: false,
    videoItem: {} //helelik {}
};
const itemVideoStart = (state, action) => {
    return {
        ...state,
        id: action.id
    };
};
const setVideoItemStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setVideoItemSuccess = (state, action) => {
    return {
        ...state,
        videoItem: action.video,
        loading: false,
        error: false
    };
};
const setVideoItemFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteVideoItem = (state, action) => {
    return {
        ...state,
        id: null,
        error: false,
        loading: false,
        videoItem: {}
    };
};
const updateMarkedVideo = (state, action) => {
    return {
        ...state,
        videoItem: {...state.videoItem, mark: action.marked }
    };
};
const updateHeartVideo = (state, action) => {
    return {
        ...state,
        videoItem: {...state.videoItem, heart: action.hearted }
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_VIDEO_START:
            return itemVideoStart(state, action);
        case actionTypes.SET_ITEM_VIDEO_START:
            return setVideoItemStart(state, action);
        case actionTypes.SET_LUCK_ITEM_VIDEO:
            return setVideoItemSuccess(state, action);
        case actionTypes.SET_ERROR_ITEM_VIDEO:
            return setVideoItemFail(state, action);
        case actionTypes.DELETE_ITEM_VIDEO:
            return deleteVideoItem(state, action);
        case actionTypes.UPDATE_ITEM_HEART_VIDEO:
            return updateHeartVideo(state, action);
        case actionTypes.UPDATE_ITEM_MARK_VIDEO:
            return updateMarkedVideo(state, action);
        default:
            return state;
    }
};
export default reducer;