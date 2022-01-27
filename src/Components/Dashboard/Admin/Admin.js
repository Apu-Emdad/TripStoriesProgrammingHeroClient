import React from "react";
import { Link } from "react-router-dom";
const Admin = ({ handleClose }) => {
  return (
    <div>
      <Link onClick={handleClose} to="/dashboard/manageOrders">
        Mange orders
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/addProduct">
        Add a product
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/manageProduct">
        Manage Product
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/makeAdmin">
        Make Admin
      </Link>
    </div>
  );
};

export default Admin;
