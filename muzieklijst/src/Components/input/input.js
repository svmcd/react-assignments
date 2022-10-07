import React from "react";
import "./input.css";

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }
    

    update = (event) => {
        this.setState({inputValue: event.target.value});
    }

    // als we met document.getelement.. of document.query werken in react dan is het document uncontrolled

    enter = (event) => {
        if(event.keyCode === 13){
            this.props.inputPressedEnter(this.state.inputValue);
        }
    }

    onButtonClick = (event) => {
        this.props.inputPressedEnter(this.state.inputValue);
    }

    render(){
        return (
            <>
                <div className="inputContainer">
                    <input className="input" name="song" type="text" placeholder="song name" onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue}/>
                    <input className="submit" type="submit" value="add" onClick={this.onButtonClick}/>
                </div>
            </>
        );
    }
}

export default Input;