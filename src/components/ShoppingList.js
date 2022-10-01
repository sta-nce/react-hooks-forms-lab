import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, myNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchParameter, setSearchParameter] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setSearchParameter(event.target.value)
  }
  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

   return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={myNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchParameter} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
