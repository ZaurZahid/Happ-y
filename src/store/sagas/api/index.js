const fetchQuotesStatus = async id => {
    // throw new Error('data.errors') 
    const response = await fetch(`https://happy-4d58f.firebaseio.com/quotes/${id}.json`)
    const data = response
    if (data.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
const fetchVideosStatus = async id => {
    // throw new Error('data.errors') 
    const response = await fetch(`https://happy-4d58f.firebaseio.com/videos/${id}.json`)
    const data = response
    if (data.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
const fetchMoviesStatus = async id => {
    // throw new Error('data.errors') 
    const response = await fetch(`https://happy-4d58f.firebaseio.com/movies/${id}.json`)
    const data = response
    if (data.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
const fetchBestItemsStatus = async(url) => {
    // throw new Error('data.errors') 
    const response = await fetch(`https://happy-4d58f.firebaseio.com/${url}.json`)
    const data = response
    if (data.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
export { fetchQuotesStatus, fetchVideosStatus, fetchMoviesStatus, fetchBestItemsStatus }