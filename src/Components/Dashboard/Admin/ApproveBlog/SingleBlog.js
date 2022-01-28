import React from "react";
import { useHistory } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  const {
    img,
    name,
    description,
    _id,
    location,
    place,
    transportation,
    status,
  } = blog;
  const history = useHistory();

  const handleDelete = (id) => {
    const userId = { _id };
    const url = `https://fast-inlet-52748.herokuapp.com/allBlogs`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userId),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          console.log(data);
        }
        alert("The blog is added");
        history.go();
      });
    // console.log(id);
  };

  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
          <i>{name}</i>
          <p className="card-text">{description}</p>
        </div>
        <button
          className="bg-danger text-light btn rounded-2"
          onClick={() => handleDelete(_id)}
        >
          Add this blog
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
