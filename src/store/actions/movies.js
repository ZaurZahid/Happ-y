import * as actionTypes from "./actionsTypes";

export const initMovies = () => {
    return {
        type: actionTypes.MOVIE_START
    }
}
export const setStartMovies = () => {
    return {
        type: actionTypes.SET_MOVIES_START
    }
}
export const setSuccessMovies = (payload) => {
    return {
        type: actionTypes.SET_LUCK_MOVIES,
        movies: payload
    }
}
export const setErrorMovies = () => {
    return {
        type: actionTypes.SET_MOVIES_ERROR
    }
}

/* HER BIRI UCUN STATUSU GOSTERMEK */
export const statsMovie = (id) => {
    return {
        type: actionTypes.STATS_MOVIE_BEGİN,
        id,
    };
};
export const statsSuccessMovie = (id, downloads) => {
    return {
        type: actionTypes.STATS_LUCK_MOVIES,
        id,
        downloads,
    };
};
export const statsErrorMovie = (id) => {
    return {
        type: actionTypes.STATS_MOVIES_ERROR,
        id,
    };
};



/* item movie actions */

export const setStartItemMovie = () => {
    return {
        type: actionTypes.SET_ITEM_MOVIE_START
    };
};
export const setSuccessItemMovie = payload => {
    return {
        type: actionTypes.SET_LUCK_ITEM_MOVIE,
        movie: payload
    };
};
export const setErrorItemMovie = () => {
    return {
        type: actionTypes.SET_ERROR_ITEM_MOVIE
    };
};
export const initItemMovie = (id) => {
    return {
        type: actionTypes.ITEM_MOVIE_START,
        id: id
    }
};
export const deleteSingleMovieFromStore = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_MOVIE,
        id: id
    }
};

export const deletingMoviesStatusFromStore = () => {
    return {
        type: actionTypes.DELETE_MOVIES_STATUS
    }
};
export const deletingMoviesFromStore = () => {
    return {
        type: actionTypes.DELETE_MOVIES
    }
};