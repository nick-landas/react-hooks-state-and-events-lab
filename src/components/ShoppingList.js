import React, {useState} from "react";
import items from "../data/items";
import Item from "./Item";



function ShoppingList({ items }) {

  const[selectedCategory, setSelectedCategory] = useState("All")
  const handleFilteredSelection  = (event) =>{
    //console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }
  const newSelectionArray = items.filter((item) => {
    if (selectedCategory === "All"){
      return true;
    }else{
      return item.category === selectedCategory;
    }
  })

  const categorizedItems = newSelectionArray.map((item) => {
    console.log(item)
    

  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilteredSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
       
}

export default ShoppingList;
