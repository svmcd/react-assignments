import React from "react";
import "./fbCard.css"

class fbCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {hp: 0, caughtOrRan: false}
    }

    componentDidMount(){
        this.setState({hp: this.props.fbcardHP})
    }

    attack = () =>{
        let randomNumber = Math.floor(Math.random() * (51 -  1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp: 0,
                    caughtOrRan: true,
                })
            }
        });
    }

    catch = () => {
        this.setState({caughtOrRan: true});
        let damagePercentage = 100 - Math.floor(this.state.hp / this.props.fbcardHP * 100);
        let dice = Math.floor(Math.random() * (100 -  1) + 1);
        if(damagePercentage > dice){
            this.props.updateCounter();    
        }
        else{

        }
    };

    render() {
        let types = this.props.fbcardType.map(function(type){
            return <span key={type} className={`fbCard__type fbCard__type--${type}`}>{type}</span>
        });

        let buttons = null;
        if(this.state.caughtOrRan === false){
            buttons = 
            <>
                <button onClick={this.catch} className="fbCard__button">catch</button>
                <button onClick={this.attack} className="fbCard__button">attack</button>
            </>
        }
    
        return(
            <article className="fbCard">
                <header className="fbCard__header">
                    <h2 className="fbCard__title">{this.props.fbcardName}</h2>
                    <div className="fbCard__label-wrapper">
                        {types}
                    </div>
                </header> 
                <section className="fbCard__section">
                    <img src={this.props.fbcardImage} alt="" className="fbCard__img"/>
                    <div className="fbCard__h3-wrapper">
                        <h3 className="fbCard__hp">{this.state.hp}</h3>
                    </div>
                </section>
                <footer className="fbCard__footer">
                    {buttons}
                </footer>
            </article>
        );
    }
}

export default fbCard;