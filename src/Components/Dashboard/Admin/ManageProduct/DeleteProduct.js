import React from "react";

const DeleteProduct = ({ service }) => {
  const { img, name, _id } = service;
  // console.log(service);
  const handleDelete = (id) => {
    const url = `https://serene-retreat-28688.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("The product is deleted");
      });
    // console.log(id);
  };
  return (
    <div className="col ">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
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

export default DeleteProduct;
