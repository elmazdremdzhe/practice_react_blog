import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const APP_KEY = '?key=asu78asd';


export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${APP_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request
    }

}