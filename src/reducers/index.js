import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts.js' ;
import SelectedPostsReducer from './reducer_selected_posts.js'

const rootReducer = combineReducers({
  posts: PostsReducer,
    selectedPostIds: SelectedPostsReducer,
  form: formReducer,
});

export default rootReducer;
