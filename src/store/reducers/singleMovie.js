import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    id: null,
    error: false,
    loading: false,
    movieItem: {} //helelik {}
};
const itemMovieStart = (state, action) => {
    return {
        ...state,
        id: action.id
    };
};
const setMovieItemStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setMovieItemSuccess = (state, action) => {
    return {
        ...state,
        movieItem: action.movie,
        loading: false,
        error: false
    };
};
const setMovieItemFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteMovieItem = (state, action) => {
    return {
        ...state,
        id: null,
        error: false,
        loading: false,
        movieItem: {}
    };
};
const updateHeartMovie = (state, action) => {
    return {
        ...state,
        movieItem: {...state.movieItem, heart: action.hearted }
    };
};
const updateMarkedMovie = (state, action) => {
    return {
        ...state,
        movieItem: {...state.movieItem, mark: action.marked }
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_MOVIE_START:
            return itemMovieStart(state, action);
        case actionTypes.SET_ITEM_MOVIE_START:
            return setMovieItemStart(state, action);
        case actionTypes.SET_LUCK_ITEM_MOVIE:
            return setMovieItemSuccess(state, action);
        case actionTypes.SET_ERROR_ITEM_MOVIE:
            return setMovieItemFail(state, action);
        case actionTypes.DELETE_ITEM_MOVIE:
            return deleteMovieItem(state, action);
        case actionTypes.UPDATE_ITEM_HEART_MOVIE:
            return updateHeartMovie(state, action);
        case actionTypes.UPDATE_ITEM_MARK_MOVIE:
            return updateMarkedMovie(state, action);
        default:
            return state;
    }
};
export default reducer;