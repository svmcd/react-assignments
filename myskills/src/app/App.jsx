import './App.css';
import React from "react";
import {withRouter, Switch, Route} from "react-router-dom";
import Intro from "../intro/intro"
import Outro from "../outro/outro"
import QuestionsRouter from "../questionsRouter/questionsRouter"

class App extends React.Component {

  constructor(){
    super();
    this.state= {questionsAndAnswers: []};
  }

  onLast = (questionsAndAnswers) => {
    this.setState({questionsAndAnswers: questionsAndAnswers});
  }

  render(){
    return (
      <Switch>
        <Route path="/vraag/:number">
          <QuestionsRouter onLast={this.onLast} />
        </Route>
        <Route path="/outro">
          <Outro questionsAndAnswers={this.state.questionsAndAnswers}/>
        </Route>
        <Route exact path="/" component={withRouter(Intro)}></Route>
      </Switch>
    );
  }
}

export default App;
