import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [myNewItem,setNewInputValue] = useState("")
  const [mySelectedCategory,setSelectedValue] = useState('Produce')
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id : uuid(),
      name : myNewItem,
      category : mySelectedCategory
    }
    onItemFormSubmit(newItem)
  }
  function handleChange(event) {
    setNewInputValue(event.target.value)
  }
  function handleCategoryChange(event){
    setSelectedValue(event.target.value)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;