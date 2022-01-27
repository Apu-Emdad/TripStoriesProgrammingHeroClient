import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import "./blogs.css";

const Blogs = (props) => {
  const filter = props.filter;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 3;
  const fetchLink = `http://localhost:5000/blogs?page=${page}&&size=${size}&&filter=${filter}`;
  useEffect(() => {
    fetch(fetchLink)
      .then((res) => res.json())
      .then((data) => {
        console.log(fetchLink);
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      })
      .finally(() => setLoading(false));
  }, [page, filter]);
  //   console.log(services);
  return (
    <div id="blogs" className="container">
      <h1 className="text-primary">Blogs </h1>
      {loading && <Spinner animation="border" variant="danger" />}

      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id}></Blog>
        ))}
      </div>
      <div className="pagination mt-3  ">
        <div className="mx-auto">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected mx-2" : "mx-2"}
              key={number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
