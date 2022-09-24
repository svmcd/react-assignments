import "./card.css"

const Card = (props) => {
    return(
        <article class="card">
            <figure class="card_figure">
                <img src={"/images/" + props.image} alt="coffee"/>
            </figure>
            <section class="card_section">
                <p>{props.text}</p>
            </section>
        </article>
    )
};

export default Card;