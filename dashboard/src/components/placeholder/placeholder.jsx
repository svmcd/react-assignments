import "./placeholder.css"

const Placeholder = (props) => {

    const placeholderClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li className="productsList__item">
            <button onClick={placeholderClicked} className="productsList__button">{props.buttonSymbol || "n/a"}</button>
            <p className="productsList__text">{props.buttonText || "n/a"}</p>
        </li>
    );
}

export default Placeholder;