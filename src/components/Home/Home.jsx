import PizzaMenu from "../PizzaMenu/PizzaMenu";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Home(displayPizza) {
  const pList = useSelector((store) => store.pizzaReducer);
  console.log(pList);

  return (
    <div>
      {pList.map((name, id) => {
        <PizzaMenu key={id} />;
      })}
    </div>
  );
}
