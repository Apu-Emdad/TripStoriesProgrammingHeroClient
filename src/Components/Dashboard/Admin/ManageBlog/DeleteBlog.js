import React from "react";
import { useHistory } from "react-router-dom";

const DeleteBlog = ({ blog }) => {
  const { img, name, _id, location, place, transportation } = blog;
  // console.log(blog);
  // console.log(service);
  const history = useHistory();
  const handleDelete = (id) => {
    const url = `http://localhost:5000/blogs/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("The product is deleted");
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
        </div>
        <button
          className="bg-danger text-light btn rounded-2"
          onClick={() => handleDelete(_id)}
        >
          Delete from List
        </button>
      </div>
    </div>
  );
};

export default DeleteBlog;
