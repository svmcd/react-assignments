import {Routes, Route} from "react-router-dom"
import { useState } from "react";
import Homepage from "../pages/Homepage"
import Productpage from "../pages/Productpage"
import './app.css';

function App() {

  const [collectionForProductPage, setCollectionForProductPage] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  const onGalleryCardClicked = (collection) => {
    setCollectionForProductPage(collection)
  }

  const updateCartCount = () => {
    setCartCount(cartCount + 1)
  }

  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked} cartCount={cartCount}/>}/>
        <Route path="/product/:type" element={<Productpage updateCartCount={updateCartCount} cartCount={cartCount} collection={collectionForProductPage}/>}/>
      </Routes>
    </>
  )
}

export default App;
