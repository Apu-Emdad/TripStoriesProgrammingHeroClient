import React from "react";
import { Link } from "react-router-dom";

const User = ({ handleClose }) => {
  return (
    <div>
      <Link onClick={handleClose} to="/dashboard/addBlog">
        Add a Blog
      </Link>
      <br />
      {/* <Link onClick={handleClose} to="/dashboard/myorders">
        my orders
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/pay">
        Pay
      </Link>
      <br />
      <Link onClick={handleClose} to="/dashboard/review">
        Review
      </Link> */}
    </div>
  );
};

export default User;
