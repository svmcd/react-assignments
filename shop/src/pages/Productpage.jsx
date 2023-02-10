import { useEffect } from "react";
import "./Productpage.css"

const Productpage = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    const toBeRendered = props.collection.map(item => {
        return ( <li key={item.name} className="productpage__listItem">
                    <img src={item.image} alt={item.alt}/>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <button onClick={props.updateCartCount}>Add to Cart</button>
                </li>
        ) 
    })

    return(
        <article className="productpage">
            <div className="cart">
                <p >{props.cartCount}</p>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
        </article>
    )
}

export default Productpage;