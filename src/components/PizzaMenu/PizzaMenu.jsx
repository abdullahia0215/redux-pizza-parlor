import React from "react";
import { useDispatch } from "react-redux";

export default function PizzaMenu({menuItem}) {
console.log(menuItem);

function addToCart() {
    console.log("clicked add/remove");
}
  return (
    <div>
      <div>
        <div><img src={menuItem.image_path}></img> {menuItem.name} {menuItem.description}{" "}
        {menuItem.price}</div>
        <button onClick={addToCart}>add/remove</button>
      </div>
    </div>
  );
}
