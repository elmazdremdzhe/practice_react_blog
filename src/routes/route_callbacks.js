import store from 'redux';
import {fetchPhotos} from '../actions';

export function onPhotosEnter(){
    store.dispatch(fetchPhotos());
}