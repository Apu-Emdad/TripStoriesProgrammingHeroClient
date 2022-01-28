import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "react-rating";

// import "./ServiceDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  const url = `https://fast-inlet-52748.herokuapp.com/blogs/${blogId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlog(data);
      });
  }, []);
  const {
    img,
    description,
    name,

    place,
    location,
    cost,
    category,
    rating,
    transportation,
  } = blog;
  return (
    <div className="card text-center container">
      <div className="card-header service-header">
        <h4>
          {place}, {location}
        </h4>
        <img className="d-block w-50 mx-auto" src={img} alt="" />
      </div>
      <div className="card-body">
        <b>
          <i className="card-title">{name}</i>
        </b>
        <p className="card-text text-start">{description}</p>
        <p style={{ textAlign: "left" }}>
          <b>Total Cost: {cost}$</b>
        </p>
        <p style={{ textAlign: "left" }}>
          <b>Category: {category}</b>
        </p>
        <p style={{ textAlign: "left" }}>
          <b>Transportation: {transportation}</b>
        </p>
        <Rating
          initialRating={rating}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star "
          className="text-warning d-block"
        ></Rating>

        <Link to={`../review/${blogId}`}>
          <button className="btn btn-danger">give a review</button>
        </Link>
      </div>
      <div className="card-footer text-muted">Have a nice tour</div>
    </div>
  );
};

export default BlogDetail;
