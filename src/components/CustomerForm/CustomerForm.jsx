import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './CustomerForm.css';

export default function CustomerForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [customer_name, setCustomer_name] = useState('');
  const [street_address, setStreet_address] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('');

  const handleNameChange = (event) => {
    setCustomer_name(event.target.value);
  };

  const handleAddressChange = (event) => {
    setStreet_address(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handletypeChange = (event) => {
    setType(event.target.value);
  };

const addCustomerInfo = (event) => {
  event.preventDefault();
  const infoToAdd = {
    customer_name,
    street_address,
    city,
    type,
    zip,
  };
  dispatch({ type: "ADD_ORDER", payload: infoToAdd });
  history.push("/checkout");
};

function goBack() {
  history.push("/");

}

  return (
    <> <h2 className="admin-header">Customer Form <button onClick={goBack} className="goBack">Go Back To Home</button></h2>
    <form onSubmit={addCustomerInfo}>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="Name"
        value={customer_name}
        required
      />

      <input
        onChange={handleAddressChange}
        type="text"
        placeholder="Address"
        value={street_address}
        required
      />

      <input
        onChange={handleCityChange}
        type="text"
        placeholder="City"
        value={city}
        required
      />

      <input
        onChange={handleZipChange}
        type="text"
        placeholder="Zip Code"
        value={zip}
        required
      />

      <input
        type="radio"
        name="type"
        value="delivery"
        onChange={handletypeChange}
        required
      />
      <label>Delivery</label>

      <input
        type="radio"
        name="type"
        value="pickup"
        onChange={handletypeChange}
        required
      />
      <label>Pickup</label>

      <button type="submit" onClick={addCustomerInfo}>Next</button>
    </form>
    </>
  );
}