import {POST_SELECTED, POST_DESELECTED} from '../actions';

import _ from 'lodash';


export default function(state=[], action){

    switch(action.type){
        case POST_DESELECTED:

            return state.filter(id => id !== action.payload);

        case POST_SELECTED:

            return _.concat(state, action.payload);

        default:
            return state;
    }

}