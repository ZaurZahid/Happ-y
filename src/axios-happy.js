import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://happy-4d58f.firebaseio.com/'
})
export default instance