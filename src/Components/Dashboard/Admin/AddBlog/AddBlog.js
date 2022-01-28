import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

import "./AddProduct.css";
const AddBlog = ({ isAdmin }) => {
  console.log(isAdmin);
  const { user } = useAuth();
  const userName = user?.displayName;
  // console.log(user.email);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    let blog;
    if (!isAdmin) {
      blog = { ...data, status: "pending", email: user.ema };
    } else {
      blog = { ...data, status: "approved" };
    }
    fetch("https://fast-inlet-52748.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };
  return (
    <div>
      <h1 className="text-primary">Add a blog</h1>

      <div className="product-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            defaultValue={userName}
          />
          <input
            {...register("place", { required: true })}
            placeholder="Name of the place"
          />
          <input
            {...register("location", { required: true })}
            placeholder="Location"
          />
          <input
            {...register("img", { required: true })}
            placeholder="put an image link"
          />
          <textarea
            type="text"
            {...register("description", { required: true })}
            placeholder="write about the place"
          />
          <input
            type="number"
            {...register("cost", { required: true })}
            placeholder="cost"
          />

          <span>Transportation </span>
          <select {...register("transportation")}>
            <option value="Road">Road</option>
            <option value="Cruise">Cruise</option>
            <option value="air">air</option>
          </select>
          <span> Category: </span>
          <select {...register("category")}>
            <option value="Road">domestic</option>
            <option value="Cruise">International</option>
          </select>
          <input
            type="number"
            {...register("rating", { required: true })}
            placeholder="rate out of 5"
          />
          <input className="bg-danger text-light" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
