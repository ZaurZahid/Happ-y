import * as actionTypes from "./actionsTypes";

export const updateHeartMovie = (id, val) => {
    return {
        type: actionTypes.UPDATE_ITEM_HEART_MOVIE,
        id,
        hearted: val,
    }
};
export const updateHeartQuote = (id, val) => {
    return {
        type: actionTypes.UPDATE_QUOTE_HEART,
        id,
        hearted: val,
    }
};
export const updateHeartVideo = (id, val) => {
    return {
        type: actionTypes.UPDATE_ITEM_HEART_VIDEO,
        id,
        hearted: val,
    }
};

export const updateHeartBests = (url, id) => {
    // console.log(url, id)
    return {
        type: actionTypes.UPDATE_BESTS_HEART,
        url,
        id,
    };
};