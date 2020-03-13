import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    bests: [],
    error: false,
    loading: false
};
const setBestStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setBestSuccess = (state, action) => {
    return {
        ...state,
        bests: [action.items],
        loading: false,
        error: false
    };
};

const setBestFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteBests = (state, action) => {
    return {
        bests: [],
        error: false,
        loading: false
    };
};
const updateBestsHearts = (state, action) => {
    return {
        ...state, //butun state
        bests: [{
            ...state.bests[0], //{hamisi}
            [action.url]: { //luck:stories
                ...state.bests[0][action.url], //hamisi
                [action.id]: { //onun icindeki id ajndkjnsdnf
                    ...state.bests[0][action.url][action.id], //hamisi
                    heart: false //ve heart u false ele
                }
            }
        }]
    }
}
const setChangeSuccess = (state, action) => {
    return {
        ...state,
        bests: [action.items],
        loading: false,
        error: false
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_BESTS_START:
            return setBestStart(state, action);
        case actionTypes.SET_BESTS_LUCK:
            return setBestSuccess(state, action);
        case actionTypes.SET_BESTS_ERROR:
            return setBestFail(state, action);
        case actionTypes.DELETE_BESTS:
            return deleteBests(state, action);
        case actionTypes.UPDATE_BESTS_HEART:
            return updateBestsHearts(state, action);
        case actionTypes.SET_LUCK_CHANGE_BESTS:
            return setChangeSuccess(state, action);
        default:
            return state;
    }
};
export default reducer;