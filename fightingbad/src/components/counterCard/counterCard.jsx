import "./counterCard.css"

function CounterCard({counter}){
    return(
        <section className="counterCard">
            <h1 className="counterCard__h1">{counter}</h1>
        </section>
    )
}

export default CounterCard;