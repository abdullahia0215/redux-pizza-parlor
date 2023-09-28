import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function CustomerForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [nameToAdd, setNameToAdd] = useState('');
  const [addressToAdd, setAddressToAdd] = useState('');
  const [cityToAdd, setCityToAdd] = useState('');
  const [zipToAdd, setZipToAdd] = useState('');
  const [receptionMethod, setReceptionMethod] = useState('');

  const handleNameChange = (event) => {
    setNameToAdd(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddressToAdd(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityToAdd(event.target.value);
  };

  const handleZipChange = (event) => {
    setZipToAdd(event.target.value);
  };

  const handleReceptionMethodChange = (event) => {
    setReceptionMethod(event.target.value);
  };

  const addCustomerInfo = (event) => {
    event.preventDefault();
    const infoToAdd = {
      name: nameToAdd,
      address: addressToAdd,
      city: cityToAdd,
      zip: zipToAdd,
      receptionMethod: receptionMethod,
    };
    dispatch({ type: 'ADD_NEW_CUSTOMER_INFO', payload: infoToAdd });
    history.push('/checkout');
  };

  return (
    <form onSubmit={addCustomerInfo}>
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="Name"
        required
      />

      <input
        onChange={handleAddressChange}
        type="text"
        placeholder="Address"
        required
      />

      <input
        onChange={handleCityChange}
        type="text"
        placeholder="City"
        required
      />

      <input
        onChange={handleZipChange}
        type="text"
        placeholder="Zip Code"
        required
      />

      <input
        type="radio"
        name="receptionMethod"
        value="delivery"
        onChange={handleReceptionMethodChange}
        required
      />
      <label>Delivery</label>

      <input
        type="radio"
        name="receptionMethod"
        value="pickup"
        onChange={handleReceptionMethodChange}
        required
      />
      <label>Pickup</label>

      <button type="submit">Next</button>
    </form>
  );
}