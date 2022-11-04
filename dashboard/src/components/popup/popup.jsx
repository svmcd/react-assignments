import React from "react";
import "./popup.css";

class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            input: ""
        } 

    }

    componentDidMount(){
        this.setState({ input: this.props.cardClicked.name });
    }    

    input = (event) =>{
        this.setState({input: event.target.value});
    }

    addProduct = () => {
        if(this.state.input !== ""){
            this.props.addButtonClicked(this.state.input); 
        }
    }

    editProduct = () => {
        this.props.editButtonClicked(this.state.input);
    }

    render(){
        let button = <button onClick={this.addProduct} className="popup__button">Add</button>;

        if(this.props.editMode === true){
            button = <button onClick={this.editProduct} className="popup__button">Edit</button>
        }

        return(
            <article className="popup">
                <div className="popup__wrapper">
                   <label htmlFor="name">Name</label>
                   <input onChange={this.input} value={this.state.input} type="text" className="popup__input" id="name"/>
                </div>
                {button}
            </article>
        );
    }
}

export default Popup;