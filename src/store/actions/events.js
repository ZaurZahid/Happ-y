import * as actionTypes from './actionsTypes'

export const initEvents = () => {
    return {
        type: actionTypes.EVENT_START
    }
};

export const setStartEvent = () => {
    return {
        type: actionTypes.SET_EVENTS_START
    };
};
export const setSuccessEvent = payload => {
    return {
        type: actionTypes.SET_LUCK_EVENTS,
        events: payload
    };
};

export const setErrorEvent = () => {
    return {
        type: actionTypes.SET_EVENTS_ERROR
    };
};
export const deletingEventFromStore = () => {
    return {
        type: actionTypes.DELETE_EVENTS
    }
};