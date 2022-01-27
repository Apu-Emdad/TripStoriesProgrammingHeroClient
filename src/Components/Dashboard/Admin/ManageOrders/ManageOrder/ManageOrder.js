import React, { useState } from "react";

const ManageOrder = ({ order }) => {
  const [orders, setOrders] = useState([]);
  // const [status, setStatus] = useState("pending");
  // console.log(order);

  //update
  const statusChange = { status: "Shipped" };
  const handleStatus = (id) => {
    const uri = `https://serene-retreat-28688.herokuapp.com/orders/${id}`;
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusChange),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setStatus("shipped");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { name, user, _id, img, address, status } = order;
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Client Name :{user}</h6>
          <h6 className="card-title">Address :{address}</h6>
          {status === "Shipped" ? (
            <p className="bg-secondary p-3 border rounded-pill text-light">
              {status}
            </p>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => handleStatus(_id)}
            >
              Ship Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
