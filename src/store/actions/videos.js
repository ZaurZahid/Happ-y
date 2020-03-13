import * as actionTypes from "./actionsTypes";

export const setStartVideo = () => {
    return {
        type: actionTypes.SET_VIDEOS_START
    };
};
export const setSuccessVideo = payload => {
    return {
        type: actionTypes.SET_LUCK_VIDEOS,
        videos: payload
    };
};
export const setErrorVideo = () => {
    return {
        type: actionTypes.SET_VIDEOS_ERROR
    };
};
export const initVideos = () => {
    return {
        type: actionTypes.VİDEO_START
    }
};

/* HER BIRI UCUN STATUSU GOSTERMEK */
export const statsVideo = (id) => {
    return {
        type: actionTypes.STATS_VİDEO_BEGİN,
        id,
    };
};
export const statsSuccessVideo = (id, downloads) => {
    return {
        type: actionTypes.STATS_LUCK_VIDEOS,
        id,
        downloads,
    };
};
export const statsErrorVideo = (id) => {
    return {
        type: actionTypes.STATS_VIDEOS_ERROR,
        id,
    };
};


/* item video actions */

export const setStartItemVideo = () => {
    return {
        type: actionTypes.SET_ITEM_VIDEO_START
    };
};
export const setSuccessItemVideo = payload => {
    return {
        type: actionTypes.SET_LUCK_ITEM_VIDEO,
        video: payload
    };
};
export const setErrorItemVideo = () => {
    return {
        type: actionTypes.SET_ERROR_ITEM_VIDEO
    };
};
export const initItemVideo = (id) => {
    return {
        type: actionTypes.ITEM_VIDEO_START,
        id: id
    }
};
export const deleteSingleVideoFromStore = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_VIDEO,
        id: id
    }
};
export const deletingVideosStatusFromStore = () => {
    return {
        type: actionTypes.DELETE_VIDEOS_STATUS
    }
};
export const deletingVideosFromStore = () => {
    return {
        type: actionTypes.DELETE_VIDEOS
    }
};