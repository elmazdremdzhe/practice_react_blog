import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = "Create post";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const APP_KEY = '?key=asu78asd';


export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${APP_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request
    }

}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${APP_KEY}`, values)
        .then(() => callback());

    return{
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id){

    const request = axios.get(`${ROOT_URL}/posts/${id}${APP_KEY}`);

    return{
        type: FETCH_POST,
        payload: request
    }

}