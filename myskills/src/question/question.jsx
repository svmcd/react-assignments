import "./question.css"
import React from "react";
import {withRouter, Link} from "react-router-dom";

class Question extends React.Component {

    constructor(props){
        super(props);
        this.myNumber = this.props.match.params.number;
        this.state = {
            rating: 0,
        }
    }

    componentDidMount(){
        this.setState({rating: this.props.rating})
    }
 

    onStarClicked = (rating) => {
        this.setState({
            rating: rating,
        }, () => {
            this.props.onRate(this.state.rating, this.props.number);
        });
    };

    render(){
        let nextButtonToBeRendered = <Link className="question__next" to={this.props.next}>Next</Link>

        if(this.props.last === true){
            nextButtonToBeRendered = <Link onClick={this.props.onLast} className="question__next" to={this.props.next}>Next</Link>
        }

        let starsArray = [];
        for(let i = 1; i <= this.state.rating; i++){
            starsArray.push(<i key={i+10} onClick={() => this.onStarClicked(i)} class="question__solid fa-solid fa-star"></i>);
        } 

        for(let i = this.state.rating + 1; i <= 5; i++){
            starsArray.push(<i key={i+10} onClick={() => this.onStarClicked(i)} class="question__solid fa-regular fa-star"></i>);
        }

        return (
            <article className="question">
                <header className="question__header">
                    <h2>#{this.props.number}  {this.props.question}</h2>   
                </header>
                <section className="question__section">
                    <p className="question__text">Geef de oefening een beoordeling</p>
                    <div className="question__stars">
                        {starsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <Link className="question__previous" to={this.props.previous}>Previous</Link>
                    {nextButtonToBeRendered}
                </footer>
            </article>
        );
    }

}

export default withRouter(Question);