import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { place, name, img, description, _id } = blog;
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
          <i>{name}</i>
          <p className="card-text">{description}</p>
          <Link to={`blogs/${_id}`}>
            <button className="btn-danger">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
