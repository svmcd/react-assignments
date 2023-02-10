import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar/FilterBar"
import GalleryCard from "../components/galleryCard/GalleryCard";
import itemsData from "../data/items";

const Homepage = (props) => {
    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([])
  
    const onGalleryCardClicked = (collection) => {
      props.onGalleryCardClicked(collection);
    }

    useEffect(() => {
      let i = 0;
      let types = ["icetea", "water", "chicken"]
  
      const galleryCardsToBeRendered = itemsData.map(collection => {
        let temp =  (
                      <Link key={types[i]} type={types[i]} onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
                        <GalleryCard items={collection}/>
                      </Link>
                    )
        i = i + 1;
        return temp
      })
  
      setItems(galleryCardsToBeRendered);
      setDefaultItems(galleryCardsToBeRendered)
    },[]);
  
    const onFilter = (typeToBeFiltered) => {
      const cardsToBeRendered = defaultItems.filter(card => {
        if(card.props.type === typeToBeFiltered){
          return card;
        }
      });
  
      setItems([cardsToBeRendered])
    }
  
    return (
      <>
        <FilterBar onFilter={onFilter}/>
        <div className="cart">
                <p >{props.cartCount}</p>
                <i class="fa-solid fa-cart-shopping"></i>
        </div>
        {items}
      </>
    );
}

export default Homepage;