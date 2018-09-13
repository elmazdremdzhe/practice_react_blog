import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost } from '../actions';
import _ from 'lodash';



class PostsNew extends Component{

    renderField(field){

        const { meta: {touched, error} } = field;

        return(
            <div className={` form-group ${touched  && error? "has-danger" : ''}`} >
                <label>{field.label}</label>
                <field.type
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        );
    }


    onSubmit(values){
       this.props.createPost(values, ()=> {
           this.props.history.push('/');
       });

    }

    render(){

        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(props => this.onSubmit(props))} >

                <Field
                    name="title"
                    label="Title"
                    type="input"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    type="input"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    type="textarea"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" > Cancel</Link>
            </form>
        );
    }
}


function validate(values){


    //console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdasda'}
    const errors = {};

    //Validate the inputs from 'values'


    if(!values.title ){
        errors.title = "Enter a title!";
    }



    if(!values.categories){
        errors.categories = "Enter some categories";
    }
    if(!values.content){
        errors.content = "Enter some content please";
    }

    //If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux from assumes form is invalid

    return errors;
}

export default reduxForm({

    form: 'PostsNewForm',

    validate,
})(
    connect(null, { createPost })(PostsNew)
 );
