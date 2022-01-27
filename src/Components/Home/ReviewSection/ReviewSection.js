import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const ReviewSection = () => {
  const [feedbacks, setFeedback] = useState([]);
  const url = `https://serene-retreat-28688.herokuapp.com/reviews`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedback(data);
      });
  }, []);
  return (
    <div className="my-4">
      <h5 className="text-primary">Review Section</h5>
      <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
        {feedbacks.map((feedback) => (
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{feedback.user}</h5>
                <Rating
                  initialRating={feedback.userRating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star "
                  className="text-warning d-block"
                ></Rating>
                <p class="card-text">{feedback.userReview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
