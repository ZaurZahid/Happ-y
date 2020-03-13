import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    stories: [],
    error: false,
    loading: false
};
const setStoryStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setStorySuccess = (state, action) => {
    return {
        ...state,
        stories: action.stories,
        loading: false,
        error: false
    };
};
const setStoryFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STORIES_START:
            return setStoryStart(state, action);
        case actionTypes.SET_LUCK_STORIES:
            return setStorySuccess(state, action);
        case actionTypes.SET_STORIES_ERROR:
            return setStoryFail(state, action);
        default:
            return state;
    }
};
export default reducer;