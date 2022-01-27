import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://serene-retreat-28688.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };
  return (
    <div>
      <h1 className="text-primary">Add a product</h1>

      <div className="product-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="name" />
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
          />
          <input
            {...register("img", { required: true })}
            placeholder="image link"
          />
          <input
            type="text"
            {...register("about", { required: true })}
            placeholder="write about the product"
          />
          <input
            type="text"
            {...register("registered", { required: true })}
            placeholder="registry number"
          />

          <input className="bg-danger text-light" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
