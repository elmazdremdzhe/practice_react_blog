// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts

import {createSelector} from 'reselect';

// Create select functions to pick off the pieces of state we care about for this calculation

const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;


const getPosts = (posts, selectedPostIds) => {

    const selectedPosts = _.filter(
        posts,
        post => _.includes(selectedPostIds, post.id));
   //console.log(selectedPosts);
    return selectedPosts;
}

export default createSelector(postsSelector, selectedPostsSelector, getPosts);