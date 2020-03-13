import * as actionTypes from '../actions/actionsTypes'

const statusReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.STATS_BEST_BEGİN:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false
                }
            }
        case actionTypes.STATS_LUCK_BESTS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false
                }
            }
        case actionTypes.STATS_BESTS_ERROR:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true
                }
            }
        case actionTypes.DELETE_BESTS_STATUS:
            return {}
        default:
            return state;
    }
}
export default statusReducer