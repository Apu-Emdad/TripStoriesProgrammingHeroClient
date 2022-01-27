import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);

  // console.log(user);
  useEffect(() => {
    const email = user.email;
    const url = `https://serene-retreat-28688.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        const order = data.filter((d) => d.email === user.email);
        // console.log(order);
        setMyOrder(order);
      });
    // console.log(url);
  }, []);
  // console.log(myOrder);

  const handleCancel = (id) => {
    const url = `https://serene-retreat-28688.herokuapp.com/orders/${id}`;
    // console.log(url);
    const x = window.confirm("are you sure");
    // console.log(x);
    // console.log(myOrder.filter((order) => order._id !== id));
    if (x) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = myOrder.filter((order) => order._id !== id);
            setMyOrder(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h4>My Orders</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto ">
        {myOrder.map((order) => (
          <div key={order._id} className="col">
            <div className="card h-100">
              <img src={order.img} alt="" />
              <div className="card-body">
                <p>{order.name}</p>
                <button
                  onClick={() => handleCancel(order._id)}
                  className="btn btn-danger"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
