import * as actionTypes from "../actions/actionsTypes";

const initialState = {
    quotes: [],
    error: false,
    loading: false
};
const setQuoteStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setQuoteSuccess = (state, action) => {
    return {
        ...state,
        quotes: action.quotes,
        loading: false,
        error: false
    };
};
const changeHeartQuote = (state, action) => {
    return {
        ...state,
        quotes: action.quotes,
        loading: false,
        error: false
    };
};

const setQuoteFail = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const deleteQuotes = (state, action) => {
    return {
        quotes: [],
        error: false,
        loading: false
    };
};
const updateHeartQuote = (state, action) => {
    return {
        ...state,
        quotes: state.quotes.map(
            (quote) => quote.id === action.id ? {...quote, heart: action.hearted } :
            quote
        )
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUOTES_START:
            return setQuoteStart(state, action);
        case actionTypes.SET_LUCK_QUOTES:
            return setQuoteSuccess(state, action);
        case actionTypes.SET_QUOTES_ERROR:
            return setQuoteFail(state, action);
        case actionTypes.DELETE_QUOTES:
            return deleteQuotes(state, action);
        case actionTypes.UPDATE_QUOTE_HEART:
            return updateHeartQuote(state, action);
        case actionTypes.SET_LUCK_CHANGE_QUOTES:
            return changeHeartQuote(state, action);
        default:
            return state;
    }
};
export default reducer;