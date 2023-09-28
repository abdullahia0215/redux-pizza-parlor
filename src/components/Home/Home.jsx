import PizzaMenu from "../PizzaMenu/PizzaMenu";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const pList = useSelector((store) => store.pizzaReducer);
  console.log(pList);
  return (
    <div>
      {pList.map((menuItem) => (
        <PizzaMenu key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  );
}
