import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from '../Home/Home';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin'
<admin></admin>;

function App() {
  const dispatch = useDispatch();
const displayPizza = () => {
  axios.get("/api/pizza/")
  .then((response) => {
    console.log(response.data);
    dispatch({ type: "SET_PIZZA", payload: response.data });
  })
  .catch((error) => {
    console.log("error on GET to display pizza reducer", error);
  });
}

const displayOrder = () => {
  axios.get("/api/order/")
  .then((response) => {
    console.log(response.data);
    dispatch({ type: "SET_ORDER", payload: response.data });
  })
  .catch((error) => {
    console.log("error on GET to display order reducer", error);
  });
}

const postOrder = () => {
  axios.post("/api/order/")
  .then((response) => {
    console.log(response.data);
    dispatch({ type: "ADD_ORDER", payload: response.data });
  })
  .catch((error) => {
    console.log("error on POST to add order in order reducer", error);
  });
}





  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink  exact to="/customer">Customer Information</NavLink></li>
        <li><NavLink exact to="/checkout">Checkout</NavLink></li>
        <li><NavLink exact to="/admin">Admin</NavLink></li>
        </ul>
        </nav>
        <Switch>  
        <Route path="/" exact>
          <Home />
          <p>Home Component is here</p>
        </Route>
        <Route path="/customer" exact>
          <CustomerForm />
          <p>Customer Form goes here</p>
        </Route>
        <Route path="/checkout" exact>
          {/* <Checkout/> */}
          <p>Checkout Component goes here</p>
        </Route>
        <Route path="/admin">
          {/* <ADMIN /> */}
          <p>Hidden Admin Page Goes here. No peeking!</p>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
