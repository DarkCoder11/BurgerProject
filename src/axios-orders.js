import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-e8cc5.firebaseio.com/'
});

export default instance;