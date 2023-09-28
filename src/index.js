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

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ORDER":
      return action.payload;
    case "ADD_ORDER":
      return [...state, action.payload];
    default:
      return state;
  }
};

   
  const lineItemReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_LINE_ITEM":
        return action.payload;
        case "ADD_LINE_ITEM":
          return [...state, action.payload];
      default:
        return state;
    }
  };


const store = createStore(
  combineReducers({
    orderReducer,
    pizzaReducer,
    lineItemReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
