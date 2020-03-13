import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    events: [],
    error: false,
    loading: false
};
const setEventStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setEventSuccess = (state, action) => {
    return {
        ...state,
        events: action.events,
        loading: false,
        error: false
    };
};

const setEventFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};

const deleteEvents = (state, action) => {
    return {
        events: [],
        error: false,
        loading: false
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_EVENTS_START:
            return setEventStart(state, action);
        case actionTypes.SET_LUCK_EVENTS:
            return setEventSuccess(state, action);
        case actionTypes.SET_EVENTS_ERROR:
            return setEventFail(state, action);
        case actionTypes.DELETE_EVENTS:
            return deleteEvents(state, action);
        default:
            return state;
    }
};
export default reducer;