import React from "react";
import { Link } from "react-router-dom";
const Admin = ({ handleClose }) => {
  return (
    <div>
      {/* <Link onClick={handleClose} to="/dashboard/manageOrders">
        Mange orders
      </Link> */}
      <br />
      <Link onClick={handleClose} to="/dashboard/addBlog">
        Add a Blog
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/approveblog">
        Approve Blogs
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/manageBlog">
        delete Blogs
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/makeAdmin">
        Make Admin
      </Link>
    </div>
  );
};

export default Admin;
