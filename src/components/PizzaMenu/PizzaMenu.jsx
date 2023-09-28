import React from "react";
import { useDispatch } from "react-redux";

export default function PizzaMenu(pizza) {
  const dispatch = useDispatch();

  console.log(pList);
dispatch({ type: "SET_PIZZA", payload: pizza}) //DOUBLE CHECK PAYLOAD TERMINOLOGY
  return (<div>
    <div>{pizza.image_path} {pizza.name} {pizza.descriptionz} {pizza.price}
    <button onClick={addToCart}>add/remove</button>
    </div>
    </div>
)}
