import React from "react";
import "./counterCard.css"

class Counter extends React.Component{

    constructor(){
        //constructor starts when Counter gets created
        super();
        this.state = {number: 0};
    }

    increase = () =>{
        this.setState({number: this.state.number + 1});
    }

    decrease = () =>{
        this.setState({number: this.state.number - 1});
    }

    render(){
        return(
            <article className="counter">
                <section className="counter_number">
                    <h1 className="counter_value">{this.state.number}</h1>
                </section>
                <section className="counter_buttons">
                    <button onClick={this.decrease} className="counter_button counter_button-decrease">-1</button>
                    <button onClick={this.increase} className="counter_button counter_button-increase">+1</button>
                </section>
            </article>
        );
    };
}

export default Counter;