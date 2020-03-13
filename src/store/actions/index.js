export {
    setStartQuote,
    setSuccessQuote,
    setErrorQuote,
    initQuotes,
    statsQuote,
    statsSuccessQuote,
    statsErrorQuote,
    /* deleting */
    deletingQuotesStatusFromStore,
    deletingQuotesFromStore,
    setChangeQuote
}
from "./quotes";
export {
    setStartVideo,
    setSuccessVideo,
    setErrorVideo,
    initVideos,
    statsVideo,
    statsSuccessVideo,
    statsErrorVideo,
    /* FOR ITEMS */
    setStartItemVideo,
    setSuccessItemVideo,
    setErrorItemVideo,
    initItemVideo,
    deleteSingleVideoFromStore,
    deletingVideosStatusFromStore,
    deletingVideosFromStore
}
from "./videos";
export {
    initMovies,
    setStartMovies,
    setSuccessMovies,
    setErrorMovies,
    statsMovie,
    statsSuccessMovie,
    statsErrorMovie,
    /* FOR ITEMS */
    setStartItemMovie,
    setSuccessItemMovie,
    setErrorItemMovie,
    initItemMovie,
    deleteSingleMovieFromStore,
    deletingMoviesStatusFromStore,
    deletingMoviesFromStore
}
from "./movies";
export {
    setStartEvent,
    setSuccessEvent,
    setErrorEvent,
    initEvents,
    deletingEventFromStore
}
from "./events";
export {
    updateHeartMovie,
    updateHeartQuote,
    updateHeartVideo,
    updateHeartBests
}
from "./heartItems";
export { updateMarkMovie, updateMarkVideo }
from "./mark";

export { initBests, setStartBests, setLuckBests, setErrorBests, deletingBestsFromStore, setChangeBests, statsBest, statsSuccessBest, statsErrorBest, deletingBestStatusFromStore }
from "./bests";