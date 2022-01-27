import React from "react";
import Blogs from "../Blogs/Blogs";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

const BlogSection = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container row">
      <div className="col-2">
        <p>lsdfj </p>
        <p>lsdfj </p>
        <p>lsdfj </p>
        <p>lsdfj </p>
        <p>lsdfj </p>
        <p>lsdfj </p>
      </div>
      <div className="col-10">
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default BlogSection;
