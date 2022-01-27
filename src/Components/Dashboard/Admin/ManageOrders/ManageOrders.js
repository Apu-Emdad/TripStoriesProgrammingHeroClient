import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder/ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://serene-retreat-28688.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrders(data);
      });
  }, [orders]);

  return (
    <div>
      <h1>Manage Orders </h1>
      <h4>Total Orders: {orders.length}</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto">
        {orders.map((order) => (
          <ManageOrder key={order._id} order={order}></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
