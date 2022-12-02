import React from "react";
import { connect } from "react-redux";
import Itrell from "../components/itrell/itrell"
import itrellsObject from "../data/itrells"
import './App.scss';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.setItrellsFromRedux(itrellsObject);
  }

  render(){

    let render = this.props.itrellsFromRedux.map(object => {
      return <Itrell id={object.id} onLabelClicked={this.onLabelClicked} key={object.id} itrell={object}/>
    });

    return(
      <>
        <header className="itrell__header">
          <h1 className="itrell__header-title" >iTrell</h1>
        </header>
        <div className="itrells__wrapper">
          {render}
        </div>
        <figure className="circle"></figure>
        <figure className="circle2"></figure>
        <figure className="circle3"></figure>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    itrellsFromRedux: state.itrells
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItrellsFromRedux: (payload) => dispatch({type: "ITRELLS", payload: payload})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

/* 
  onLabelClicked = (event, id) => {
    let oldState = this.state.activities
    let newState = this.state.activities.map(obj => {
      if (obj.id === id) {
        return {...obj, label: "aa"}
      }
      return obj
    })
    console.log(obj)



    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = 'salmon';
      event.currentTarget.style.color = 'white';
    }

  } */