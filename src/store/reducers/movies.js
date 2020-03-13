import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    movies: [],
    loading: false,
    error: false
};
const setMoviesStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setMoviesLuck = (state, action) => {
    return {
        ...state,
        movies: action.movies,
        loading: false,
        error: false
    };
};
const setMoviesError = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteMovies = (state, action) => {
    return {
        movies: [],
        loading: false,
        error: false
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MOVIES_START:
            return setMoviesStart(state, action);
        case actionTypes.SET_LUCK_MOVIES:
            return setMoviesLuck(state, action);
        case actionTypes.SET_MOVIES_ERROR:
            return setMoviesError(state, action);
        case actionTypes.DELETE_MOVIES:
            return deleteMovies(state, action);
        default:
            return state;
    }
};
export default reducer;