import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Checkout({ displayOrder }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const customer = useSelector((store) => store.orderReducer);
  const cartList = useSelector((store) => store.cartReducer);

  function goBack() {
    history.push("/customer");

  }
  // remove from table
  const handleRemoveFromCart = (pizzaId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: pizzaId });
  };

  let cartTotal = 0;
  for (let i = 0; i < cartList.length; i++) {
    cartTotal = cartTotal + Number(cartList[i].price * cartList[i].quantity);
  }


  let allInfo={
    customer_name: customer.customer_name,
    street_address: customer.street_address,
    city: customer.city,
    zip: customer.zip,
    type: customer.type,
    total: cartTotal,
    pizzas: cartList,
    time: customer.time
}



  useEffect(() => {
    displayOrder();
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Your order has been accepted!")
    postCheckout()
  };


  // POST FUNCTION TO /ORDER server
  const postCheckout = () => {
    axios.post('/api/order', allInfo)
      .then((response) => {
        console.log(response.data);
        history.push("/");
      dispatch({ type: "CLEAR_CART" });
      dispatch({ type: "CLEAR_ORDER" });
      })
      .catch((error) => {
        console.log("error on POST to add order in DB", error);
      });
  };


  return (
    <>
       <h2 className="admin-header">Checkout<button onClick={goBack} className="goBack">Go Back To Customer Information</button></h2>


     <div className="address"> 
          <address key={customer.id}>
            <p className="p_address">{customer.customer_name}</p>
            <p className="p_address">{customer.street_address}</p>
            <p className="p_address">{customer.city} {customer.zip}</p>
            <p className="pickupType">{customer.type}</p>
          </address>
</div>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Price </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((order) => {
            return (
                <tr key={order.id}>
                    <td>{order.name}</td>
                    <td>${order.price} x {order.quantity } = ${Number(order.price) * Number(order.quantity)}</td>
                    <td>
                      <button className="checkoutButton" onClick={() => handleRemoveFromCart(order.id)}>Remove</button>
                    </td>
                </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <h4 className="totalPriceCheckout">Total: ${cartTotal} </h4>
      <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
    </>
  );
}