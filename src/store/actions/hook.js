import React from "react"; /*useCallback for unnecessary rendering */
import * as actionTypes from "../actions/actionsTypes";
import axios from "../../axios-happy";

/* reducer part */
const initialState = {
    stories: [],
    error: false,
    loading: false
};
const setStoryStartReducer = (state, action) => {
    return {
        ...state,
        loading: true
    };
};
const setStorySuccessReducer = (state, action) => {
    return {
        ...state,
        stories: action.stories,
        loading: false,
        error: false
    };
};
const setStoryFailReducer = (state, action) => {
    return {
        ...state,
        error: true
    };
};
const setStoryHeartReducer = (state, action) => {
    return {
        ...state,
        stories: state.stories.map(story =>
            story.id === action.id ? {...story, heart: action.hearted } : story
        )
    };
};
const setStoryMarkReducer = (state, action) => {
    return {
        ...state,
        stories: state.stories.map(story =>
            story.id === action.id ? {...story, mark: action.marked } : story
        )
    };
};
const HttpReducer = (curState, action) => {
    switch (action.type) {
        case actionTypes.SET_STORIES_START:
            return setStoryStartReducer(curState, action);
        case actionTypes.SET_LUCK_STORIES:
            return setStorySuccessReducer(curState, action);
        case actionTypes.SET_STORIES_ERROR:
            return setStoryFailReducer(curState, action);
        case actionTypes.HEART_LUCK_STORIES:
            return setStoryHeartReducer(curState, action);
        case actionTypes.MARK_LUCK_STORIES:
            return setStoryMarkReducer(curState, action);
        default:
            return curState;
    }
};

// /* action part */
const setStoriesStart = () => {
    // console.log('setStoriesStart');/* bunlari console da yaz her sey aydin olacaq */
    return {
        type: actionTypes.SET_STORIES_START
    };
};

const setLuckStories = payload => {
    // console.log('setLuckStories');
    return {
        type: actionTypes.SET_LUCK_STORIES,
        stories: payload
    };
};
const HeartLuckStories = (id, val) => {
    return {
        type: actionTypes.HEART_LUCK_STORIES,
        id,
        hearted: val
    };
};
const MarkLuckStories = (id, val) => {
    return {
        type: actionTypes.MARK_LUCK_STORIES,
        id,
        marked: val
    };
};
const setStoriesError = () => {
    // console.log('setStoriesError');
    return {
        type: actionTypes.SET_STORIES_ERROR
    };
};

/* Hey diqqet diqqet biz burda reduxu--->REACT HOOKS ILE evez edirik,ona gore de redux devtools cixmir */
const useMyCustomHookForStories = () => {
    const [curState, dispatch] = React.useReducer(HttpReducer, initialState); //myState reducerdeki statedir
    /* burda hec bir redux yoxduyaaaa */
    const sendRequest = (url, id) => {
        dispatch(setStoriesStart());
        axios
            .get(url)
            .then(response => {
                var newStory = []; //convert {} to []
                if (url === "/luck-stories.json") {
                    for (let key in response.data) {
                        newStory.push({
                            ...response.data[key],
                            id: key //keyi mutleq gotur cunku /story=jdjsdh  lazim olur
                        });
                        newStory.sort(function(a, b) {
                            var heart1 = a.heart,
                                heart2 = b.heart;
                            if (heart1 === true)
                            //sort string ascending
                                return -1;
                            if (heart1 === false) return 1;
                            return 0; //default return value (no sorting)
                        });
                    }
                } else {
                    newStory.push({...response.data, id: id });
                }
                dispatch(setLuckStories(newStory)); //dispatcha funcdan gelen seyi gonderirem
            })
            .catch(err => dispatch(setStoriesError()));
    };
    const heartStory = (id, val) => {
        try {
            // console.log(id, val);
            dispatch(HeartLuckStories(id, val));
            axios.put(
                `/luck-stories/${id}/heart.json`,
                val
            ); /* .then(res => console.log(res)) */
        } catch (error) {
            console.log(error);
        }
    };
    const markStory = (id, val) => {
        try {
            // console.log(id, val);
            dispatch(MarkLuckStories(id, val));
            axios.put(
                `/luck-stories/${id}/mark.json`,
                val
            ); /* .then(res => console.log(res)) */
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(curState);
    return {
        loading: curState.loading,
        stories: curState.stories,
        error: curState.error,
        sendRequest: sendRequest,
        heartStory: heartStory,
        markStory: markStory
    };
};
export default useMyCustomHookForStories;