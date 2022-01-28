import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../Hooks/useAuth";
import "./Purchase.css";

const Review = () => {
  const [item, setItem] = useState({});
  const [orderedItem, setOrderedItem] = useState({});
  const { blogId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const history = useHistory();

  /*  const url = `https://serene-retreat-28688.herokuapp.com/services/${blogId}`;
  console.log(url);

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
    console.log(user);
 */
  const onSubmit = (data) => {
    const Id = { blogId: blogId };
    const userReview = { ...data, ...Id };

    console.log(userReview);
    axios
      .post("https://fast-inlet-52748.herokuapp.com/reviews", userReview)
      .then((res) => {
        console.log(res);
        if (res) {
          reset();
          // history.push("/home");
        }
      });
    // setOrderedItem(userOrder);
  };
  //   console.log(user);

  return (
    <div className="add-service border w-50 mx-auto border-3 my-5 py-5 rounded-3 shadow-lg">
      <h4 className="text-light">Give your review</h4>
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
        <textarea
          type="text"
          placeholder="Your review"
          {...register("review", { required: true })}
        />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default Review;
