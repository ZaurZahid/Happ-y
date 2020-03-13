import * as actionTypes from '../actions/actionsTypes'

const statusVideoReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.STATS_VİDEO_BEGİN:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false
                }
            }
        case actionTypes.STATS_LUCK_VIDEOS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false
                }
            }
        case actionTypes.STATS_VIDEOS_ERROR:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true
                }
            }
        case actionTypes.DELETE_VIDEOS_STATUS:
            return {}
        default:
            return state;
    }
}
export default statusVideoReducer