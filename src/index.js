import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import PostsIndex from './components/posts_index.js';
import PostsNew from './components/posts_new.js';
import PostsShow from './components/posts_show.js';
import {Photos} from './components/photos.js'
import AnimatedComments from './components/animated_comments';
import ComponentWithModalWindow from './components/component_with_modal_window';
import {onPhotosEnter } from './routes/route_callbacks';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>

            <Route path="/photos" component={Photos} />
            <Route path="/animation" component={AnimatedComments} />
            <Route path="/modal" component={ComponentWithModalWindow} />
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/" component={PostsIndex}/>
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
