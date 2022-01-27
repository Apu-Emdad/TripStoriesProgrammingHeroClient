import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import "./Purchase.css";

const Purchase = () => {
  const [item, setItem] = useState({});
  const [orderedItem, setOrderedItem] = useState({});
  const { purchaseId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const history = useHistory();

  const url = `https://serene-retreat-28688.herokuapp.com/services/${purchaseId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data);
        delete data._id;
        // console.log(data);
      });
  }, []);
  //   console.log(user);

  const onSubmit = (data) => {
    const status = { status: "pending" };
    const userOrder = { ...data, ...item, ...status };
    // console.log(userOrder);
    axios
      .post("https://serene-retreat-28688.herokuapp.com/orders", userOrder)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          reset();
          history.push("/home");
        }
      });
    // setOrderedItem(userOrder);
  };
  //   console.log(user);

  return (
    <div className="add-service border w-50 mx-auto border-3 my-5 py-5 rounded-3 shadow-lg">
      <h4 className="text-light">Fill The Form To Purchase the Service</h4>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("user", { required: true, maxLength: 20 })}
          placeholder="name"
          defaultValue={user?.displayName}
        />
        <input
          type="email"
          {...register("email", { required: true, maxLength: 20 })}
          placeholder="email"
          defaultValue={user?.email}
        />
        <input
          type="text"
          placeholder="Your Address"
          {...register("address", { required: true })}
        />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default Purchase;
