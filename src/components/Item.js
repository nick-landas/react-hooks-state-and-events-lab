import React, {useState} from "react";

function Item({ name, category }) {
  
  const[addItem, setAddItem] = useState("")
  const inCart = addItem ? "in-cart" : ""

  function handleAddToCart(item) { 
    setAddItem((addItem) =>!addItem)
  }
  
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
  <button className="add" onClick={handleAddToCart}>{addItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
