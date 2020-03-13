import * as actionTypes from "./actionsTypes";

export const updateMarkMovie = (id, val) => {
    return {
        type: actionTypes.UPDATE_ITEM_MARK_MOVIE,
        id,
        marked: val,
    }
};
export const updateMarkVideo = (id, val) => {
    return {
        type: actionTypes.UPDATE_ITEM_MARK_VIDEO,
        id,
        marked: val,
    }
};