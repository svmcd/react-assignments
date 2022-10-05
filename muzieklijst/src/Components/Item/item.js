import React from "react";
import "./item.css";

class Item extends React.Component{
    constructor(props){
        super(props);
        this.className = "";
        this.state = {
            done: this.props.done,
        }
    }
    
    onItemClick = () =>{
        this.setState({done: !this.state.done});
    }

    render(){
        if(this.state.done){
            this.className = "todo_item none" 
        }
        else {
            this.className += "todo_item " 
        }
        return (
            <li onClick={this.onItemClick} className={this.className}>{this.props.name}</li>
        )
    } 
}

export default Item;