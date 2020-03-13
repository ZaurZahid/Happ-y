import * as actionTypes from '../actions/actionsTypes'

const statusMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.STATS_MOVIE_BEGİN:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false
                }
            }
        case actionTypes.STATS_LUCK_MOVIES:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false
                }
            }
        case actionTypes.STATS_MOVIES_ERROR:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true
                }
            }
        case actionTypes.DELETE_MOVIES_STATUS:
            return {}
        default:
            return state;
    }
}
export default statusMovieReducer