import React, {Component} from 'react';
import Modal from './modal';

export default class ComponentWithModalWindow extends Component{
    render(){
        return(
            <div className="app">
                <div className="left">
                    <h1>Hello</h1>
                    <h2>Hello</h2>
                    <h3>Hello</h3>
                    <h4>Hello</h4>
                </div>
                <div className="right">
                    <h1>Hello</h1>
                    <h2>Hello</h2>
                    <h3>Hello</h3>

                    <h4>Hello</h4>
                    <div>
                        <Modal>
                            <h1>A really long amount of Modal Content</h1>
                            <p> Etc. </p>
                            <p> Lorem ipsum Thanks for being a valued member of LinkedIn! We're trying to learn more about how you recently experienced a feature on LinkedIn so that you can help us improve it.
                            </p>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}