import React, { useEffect, useState } from "react";
// import Service from "../Service/Service";
import { Spinner } from "react-bootstrap";
import DeleteProduct from "./DeleteProduct";

const ManageProduct = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://serene-retreat-28688.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .finally(() => setLoading(false));
  }, [services]);

  return (
    <div id="services" className="container-fluid">
      <h1 className="text-primary">Our Popular Bikes </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service) => (
          <DeleteProduct key={service._id} service={service}></DeleteProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
