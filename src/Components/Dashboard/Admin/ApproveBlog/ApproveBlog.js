import React, { useEffect, useState } from "react";

import { Spinner } from "react-bootstrap";
import DeleteBlog from "../ManageBlog/DeleteBlog";
import SingleBlog from "./SingleBlog";

const ApproveBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fast-inlet-52748.herokuapp.com/pending")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      })
      .finally(() => setLoading(false));
  }, [blogs]);

  return (
    <div className="container-fluid">
      <h1 className="text-primary">Add Blogs </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {blogs.map((blog) => (
          <SingleBlog key={blog._id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default ApproveBlog;
