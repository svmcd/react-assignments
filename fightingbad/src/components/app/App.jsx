import React from "react";
import "../fbCard/fbCard";
import FBCardWrapper from "../../layouts/FBCardWrapper/FBCardWrapper"
import CounterCard from "../counterCard/counterCard";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  updateCounter = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <main className="main">
        <FBCardWrapper updateCounter={this.updateCounter} />
        <CounterCard counter={this.state.counter} />
      </main>
    );
  }
}

export default App;
