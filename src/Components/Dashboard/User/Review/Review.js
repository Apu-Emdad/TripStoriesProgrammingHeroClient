import React, { useRef, useState } from "react";
import Rating from "react-rating";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const { user } = useAuth();
  const reviewRef = useRef();
  const handleReview = () => {
    // console.log(reviewRef.current.value);
    setReview(reviewRef.current.value);
  };
  const handleSubmit = (e) => {
    const feedback = {
      user: user.displayName,
      userReview: review,
      userRating: rating,
    };
    console.log(feedback);
    axios
      .post("https://serene-retreat-28688.herokuapp.com/reviews", feedback)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          reviewRef.current.value = "";
          setRating(0);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-primary">Feedback</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          className="w-50 "
          ref={reviewRef}
          onBlur={handleReview}
        ></textarea>

        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star "
          onChange={(rate) => setRating(rate)}
          className="text-warning d-block"
        ></Rating>
        <br />
        <button
          type="submit"
          className="btn btn-primary rounded rounded-3 px-4 mb-2"
        >
          Submit feedback
        </button>
      </form>
    </div>
  );
};

export default Review;
