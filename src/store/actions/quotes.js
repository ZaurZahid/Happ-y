import * as actionTypes from "./actionsTypes";

export const setStartQuote = () => {
    return {
        type: actionTypes.SET_QUOTES_START
    };
};
export const setSuccessQuote = payload => {
    return {
        type: actionTypes.SET_LUCK_QUOTES,
        quotes: payload
    };
};
export const setChangeQuote = payload => {
    return {
        type: actionTypes.SET_LUCK_CHANGE_QUOTES,
        quotes: payload
    };
};
export const setErrorQuote = () => {
    return {
        type: actionTypes.SET_QUOTES_ERROR
    };
};
export const initQuotes = () => {
    return {
        type: actionTypes.QUOTE_START
    }
};

/* HER BIRI UCUN STATUSU GOSTERMEK */
export const statsQuote = (id) => {
    return {
        type: actionTypes.STATS_START,
        id,
    };
};
export const statsSuccessQuote = (id, downloads) => {
    return {
        type: actionTypes.STATS_LUCK_QUOTES,
        id,
        downloads,
    };
};
export const statsErrorQuote = (id) => {
    return {
        type: actionTypes.STATS_QUOTES_ERROR,
        id,
    };
};

/* deleting */

export const deletingQuotesStatusFromStore = () => {
    return {
        type: actionTypes.DELETE_QUOTES_STATUS
    }
};
export const deletingQuotesFromStore = () => {
    return {
        type: actionTypes.DELETE_QUOTES
    }
};