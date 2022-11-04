import ProductCard from "../productcard/productcard";
import Placeholder from "../placeholder/placeholder"
import "./right.css"

const Right = ({headerText, buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {

    let onCardClicked = (idFromCard) => {
        onProductCardClicked(idFromCard);
    }
 
    let productCardsToBeRendered = productCards.map(product => {
        if(product.name === "Placeholder"){
            return <Placeholder onCardClicked={onCardClicked} buttonSymbol="+" buttonText="Add item" key={product.id} id={product.id} />;
        }
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} img={product.img} />
    });

    return(
        <section className="productsWrapper">
            <header className="header">
                <h1 className="header__h1">{headerText || "n/a"}</h1>
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default Right;