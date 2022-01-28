import React, { useEffect, useState } from "react";
// import Service from "../Service/Service";
import { Spinner } from "react-bootstrap";
import DeleteBlog from "./DeleteBlog";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fast-inlet-52748.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogs(data.blogs);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div id="services" className="container-fluid">
      <h1 className="text-primary">Manage Blogs </h1>
      {loading && <Spinner animation="border" variant="danger" />}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {blogs.map((blog) => (
          <DeleteBlog key={blog._id} blog={blog}></DeleteBlog>
        ))}
      </div>
    </div>
  );
};

export default ManageBlog;
