import * as actionTypes from "./actionsTypes";
/* action creators */
export const setLuckStories = payload => {
    return {
        type: actionTypes.SET_LUCK_STORIES,
        stories: payload
    };
};

export const setStoriesError = () => {
    return {
        type: actionTypes.SET_STORIES_ERROR
    };
};
export const setStoriesStart = () => {
    return {
        type: actionTypes.SET_STORIES_START
    }
}
export const initStories = () => {
    return {
        type: actionTypes.STORY_START
    }
};