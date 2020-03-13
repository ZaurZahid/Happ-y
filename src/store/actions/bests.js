import * as actionTypes from "./actionsTypes";
import axios from "../../axios-happy";

export const initBests = () => {
    return {
        type: actionTypes.BESTS_INIT
    }
};
export const setStartBests = () => {
    return {
        type: actionTypes.SET_BESTS_START
    };
};
export const setLuckBests = (payload) => {
    return {
        type: actionTypes.SET_BESTS_LUCK,
        items: payload
    }
};
export const setChangeBests = (payload) => {
    return {
        type: actionTypes.SET_LUCK_CHANGE_BESTS,
        items: payload
    }
};
export const setErrorBests = () => {
    return {
        type: actionTypes.SET_BESTS_ERROR
    };
};
export const deletingBestsFromStore = () => {
    return {
        type: actionTypes.DELETE_BESTS
    };
};

/* HER BIRI UCUN STATUSU GOSTERMEK */
export const statsBest = (id) => {
    return {
        type: actionTypes.STATS_BEST_BEGİN,
        id,
    };
};
export const statsSuccessBest = (id, downloads) => {
    return {
        type: actionTypes.STATS_LUCK_BESTS,
        id,
        downloads,
    };
};
export const statsErrorBest = (id) => {
    return {
        type: actionTypes.STATS_BESTS_ERROR,
        id,
    };
};
export const deletingBestStatusFromStore = () => {
    return {
        type: actionTypes.DELETE_BESTS_STATUS
    }
};