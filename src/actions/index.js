import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = "Create post";
export const DELETE_POST = "Delete post";
export const POST_SELECTED = " post selected";
export const POST_DESELECTED = " post deselected";


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

export function deletePost(id, callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${APP_KEY}`)
        .then(() => callback());

    return{
        type: DELETE_POST,
        payload: id
    }
}


export function postSelected(id){

    return{
        type: POST_SELECTED,
        payload: id
    }
}

export function postDeselected(id){

    return{
        type: POST_DESELECTED,
        payload: id
    }
}