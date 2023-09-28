import PizzaMenu from "../PizzaMenu/PizzaMenu";
import React from "react";
import { useEffect } from "react";
import { useSelector, } from "react-redux";


export default function Home(displayPizza) {
  const pList = useSelector((store) => store.pizzaReducer);
  console.log(pList);

  useEffect(() => {
      displayPizza();
}, []);

  return (
    <div>
      {pList.map((name, id) => {
        <PizzaMenu key={id} name={name} />;
      })}
    </div>
  );
}
