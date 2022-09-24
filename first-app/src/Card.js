import "./Card.css";

const Card = (props) => {

    return(
        <article>
            <header>
                <h2>{props.title || "No title available"}</h2>
            </header>
            <section>
                <p>{props.text || "This text is currently not available."}</p>
            </section>
        </article>
    );
}

export default Card;