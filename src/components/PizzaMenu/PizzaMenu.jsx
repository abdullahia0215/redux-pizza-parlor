import React from "react";
import "../PizzaMenu/PizzaMenu.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PizzaMenu({menuItem, addToCart}) {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

const increaseQuantity = () => {
  setQuantity(quantity + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};
  const itemWithQuantity = { ...menuItem, quantity }; // Include quantity in the payload
  const dispatch = useDispatch()
  function addToCart() {
    console.log("clicked add/remove");
   
    dispatch({ type: "ADD_TO_CART", payload: itemWithQuantity });
  alert("Added item")
}
  return (
    <div className="container">
        <div className="menuCard" >
          <img src={menuItem.image_path}
          style={{ width: "200px", height: "200px" }}></img> {menuItem.name} {menuItem.description}{" "}
        <br />
        <p>{menuItem.price}</p>
        <div className="quantity-controls">{" "}
        <button onClick={decreaseQuantity}> - </button>
        {" "}
        <span>{quantity}</span>
        {" "}
        <button onClick={increaseQuantity}> + </button>
      </div>
      <br />
        <button onClick={(addToCart)} className="menuItem">Add to Cart</button>
        </div>
    </div>
  );
}



