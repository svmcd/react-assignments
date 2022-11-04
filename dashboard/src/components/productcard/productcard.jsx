import "./productcard.css"

const ProductCard = (props) => {

    const productCardClicked = () => {
        props.onCardClicked(props.id);
    }

    return (
        <li onClick={productCardClicked} className="productsList__item">
            <img className="productsList__image" src={props.img} alt=""/>
            <p className="productsList__imgText">{props.name}</p>
        </li>
    )

}

export default ProductCard;