import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Checkout({ displayOrder }) {
  const history = useHistory();
  const orderList = useSelector((store) => store.orderReducer);
  const pizzaList = useSelector((store) => store.pizzaReducer);

  console.log(orderList);

  useEffect(() => {
    console.log("in useEffect");
    displayOrder();
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    // const artist = {name: newArtist};
    console.log("submit button");
    // addArtist(artist);
    // setNewArtist("");
    history.push("/");
  };
  //NEED---------------------------------------
  // POST FUNCTION TO /ORDER

  return (
    <>
      <h1 className="checkoutHeader"> Step 3: Checkout</h1>

     <div className="address"> {orderList.map((customer) => {
        return (
          <address>
            <p className="p_address">{customer.customer_name}</p>
            <p className="p_address">{customer.street_address}</p>
            <p className="p_address">{customer.city} {customer.zip}</p>
          </address>
        );
      })}
</div>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Price </th>
          </tr>
        </thead>
        <tbody>
          {pizzaList.map((order) => {
            return (
                <tr key={order.id}>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
    </tr>
            );
          })}
        </tbody>
      </table>
      <p className="totalPriceCheckout">Total:</p>
      <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
    </>
  );

  
}