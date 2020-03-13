import * as actionTypes from '../actions/actionsTypes'

const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.STATS_START:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false
                }
            }
        case actionTypes.STATS_LUCK_QUOTES:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false
                }
            }
        case actionTypes.STATS_QUOTES_ERROR:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true
                }
            }
        case actionTypes.DELETE_QUOTES_STATUS:
            return {}
        default:
            return state;
    }
}
export default statusReducer