import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts, postSelected, postDeselected } from '../actions/index.js';
import { Link } from 'react-router-dom';
import SelectedPostsList from './selected_posts_list.js';


class PostsIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    onCheckboxChange(event){
        const target = event.target;
        const value = parseInt(target.value);
        if(target.checked){
            this.props.postSelected(value);
        } else {
            this.props.postDeselected(value);
        }

    }


    renderPosts(){

        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    <input type="checkbox"
                           onChange={this.onCheckboxChange.bind(this)}
                           className="form-check-input" value={post.id} />
                    <Link to={`/posts/${post.id}`}>
                       {post.title}
                   </Link>
                </li>);
        });
    }

    render(){

        return(
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">Add new post</Link>
                </div>
                <h4>Selected Posts</h4>
                <SelectedPostsList/>
                <h3>All Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}



export default connect(mapStateToProps, {fetchPosts, postSelected, postDeselected})(PostsIndex);