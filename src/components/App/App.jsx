import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../Home/Home";
import CustomerForm from "../CustomerForm/CustomerForm";
import Checkout from "../Checkout/Checkout";
import Admin from "../Admin/Admin";

function App() {
  const dispatch = useDispatch();
  const displayPizza = () => {
    axios
      .get("/api/pizza/")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_PIZZA", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET to display pizza reducer", error);
      });
  };
  useEffect(() => {
    displayPizza();
    displayOrder()
  }, []);

  const displayOrder = () => {
    axios
      .get("/api/order/")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "SET_ALL_ORDERS", payload: response.data });
      })
      .catch((error) => {
        console.log("error on GET to display order reducer", error);
      });
  };

  const postOrder = () => {
    axios
      .post("/api/order/")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "ADD_ORDER", payload: response.data });
      })
      .catch((error) => {
        console.log("error on POST to add order in order reducer", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/customer">
                Customer Information
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/checkout">
                Checkout
              </NavLink>
            </li>
            <li>
               {/* <NavLink exact to="/admin">
                Admin
              </NavLink> */}
              {/* commented out to hide admin  */}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home displayPizza={displayPizza} />
          </Route>
          <Route path="/customer" exact>
            <CustomerForm />
          </Route>
          <Route path="/checkout" exact>
            <Checkout displayOrder={displayOrder}/>
          </Route>
          <Route path="/admin">
            <Admin displayOrder={displayOrder}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
