import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const pizzaReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PIZZA":
      return action.payload;
    default:
      return state;
  }
};

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return action.payload;
      case "CLEAR_ORDER":
        return {}
    default:
      return state;
  }
};

const allOrderReducer =( state=[], action) => {
  switch (action.type) {
    case "SET_ALL_ORDERS":
      return action.payload
      case "ADD_ORDER":
      return [...state, action.payload]
      case "CLEAR_ORDER":
        return []
      // case "ADD_TO_CART":
      // return [...state, action.payload];
      default:
        return state;
  }
}  



  const cartReducer = (state = [], action) => {
    switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
      case "CLEAR_CART":
        return [];
        case "[]":
          return [];
          case "CLEAR_CART":
            return [];
        default:
          return state;
    }
  }
  
  


const store = createStore(
  combineReducers({
    orderReducer,
    pizzaReducer,
    // lineItemReducer,
    cartReducer,
    allOrderReducer

  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
