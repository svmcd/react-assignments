import React from "react"
import { connect } from "react-redux";

class Input extends React.Component{

    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }

    onInputChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    onActivityAdded = (event) => {
        event.preventDefault();
        let oldState = [...this.props.itrellsFromRedux];
        let newState = {
          label: "Vandaag",
          desc: this.state.inputValue,
          id: oldState[this.props.id - 1].activities.length + 1
        }
        oldState[this.props.id - 1].activities.push(newState);
        this.props.setItrellsFromRedux(oldState);
    }

    render(){
        return(
            <form onSubmit={this.onActivityAdded} className="itrell__input">
                <label className="itrell__input-label" htmlFor="activity">Add something</label>
                <input onChange={this.onInputChange} className="itrell__inputfield" id="activity" type="text" placeholder="Walk dog.." value={this.state.inputValue}></input>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itrellsFromRedux: state.itrells,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setItrellsFromRedux: (payload) => {dispatch({type: "ITRELLS", payload: payload})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);