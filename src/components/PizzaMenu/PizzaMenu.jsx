import React from "react";
import "../PizzaMenu/PizzaMenu.css";
import { useDispatch } from "react-redux";

export default function PizzaMenu({menuItem, addToCart}) {
  console.log(menuItem);
  const dispatch = useDispatch()
  function addToCart() {
    console.log("clicked add/remove");
  dispatch({type: "ADD_TO_CART", payload: menuItem})
  alert("Added item")
}
  return (
    <div className="container">
        <div className="menuCard" >
          <img src={menuItem.image_path}
          style={{ width: "200px", height: "200px" }}></img> {menuItem.name} {menuItem.description}{" "}
        <br />
        <p>{menuItem.price}</p>
        <button onClick={(addToCart)} className="menuItem">Add to Cart</button>
        </div>
    </div>
  );
}
