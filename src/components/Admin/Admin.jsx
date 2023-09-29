import React from 'react';
import { useSelector } from 'react-redux';
import './Admin.css'; 
//  date.fns

function Admin() {
  const orders = useSelector((state) => state.allOrderReducer);
  console.log('Orders',orders);

  return (
    <>
      <h2 className="admin-header">Admin Orders</h2>
      <div className="admin-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Order Total</th>
            <th>Order Time</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                {/* <td>${order.total}</td> */}
                {/* <td>{new Date(order.time).toLocaleString()}</td> */}
                

                <td> Ordered on : {date-fns(order.time).fromNow()} </td>
                <td>{order.type}</td>
              </tr>
            );
          })}
            {/* <td>{cartTotal}</td> */}
          
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Admin;