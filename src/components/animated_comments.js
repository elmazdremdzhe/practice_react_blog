import _ from 'lodash';
import React, {Component} from 'react';
import Faker from 'faker';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class AnimatedComments extends Component{
    constructor(props){

       super(props);

       this.state = { quotes: [] };

    }

    onAddClick(){
        const quote = Faker.lorem.sentence();
        this.setState({quotes: [ ...this.state.quotes, quote ]});

    }

    onRemoveClick(quote){
        this.setState({ quotes: _.without(this.state.quotes, quote) });
    }

    renderQuotes(){
        const transitionOptions = {
            classNames: "fade",
            timeout: 500
        };

        return this.state.quotes.map((item, index) => {
           return(
            <CSSTransition key={item} {...transitionOptions }>
               <li className="list-group-item" key={item} >
                {item}
                <button onClick={this.onRemoveClick.bind(this, item)} className="btn btn-danger pull-right">Remove</button>
             </li>
            </CSSTransition>
           );
        });
    }

    render(){



        return(
            <div>
                <button onClick={this.onAddClick.bind(this)} className="btn btn-default" >Add</button>
                <ul className="list-group">
                    <TransitionGroup>
                        {this.renderQuotes()}
                    </TransitionGroup>

                </ul>
            </div>
        );
    }
}