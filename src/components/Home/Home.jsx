import PizzaMenu from "../PizzaMenu/PizzaMenu";
import React from "react";
import { useHistory } from "react-router-dom";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Home.css"
export default function Home(goNext) {
  const history = useHistory();

  const pList = useSelector((store) => store.pizzaReducer);
  console.log(pList);
  function goNext() {
    history.push("/customer");

  }
  return (
    <>
    <br/>
<button onClick={goNext} className="continue"  >Continue With Order</button>
<hr/>
    <div className="menuContainer">
      {pList.map((menuItem) => (
        <PizzaMenu key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
    </>
  );
}
