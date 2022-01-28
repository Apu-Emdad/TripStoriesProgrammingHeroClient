import React, { useState } from "react";

import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";

import Faq from "../FAQ/Faq";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  const [filter, setFilter] = useState("blogs");
  const [page, setPage] = useState(0);

  return (
    <div id="home" className="">
      <Banner></Banner>
      {/* blog section  */}
      <div className="container row mx-auto mt-2">
        <div className="col-2">
          {/* experiment  */}
          <div className="dropdown mt-5 ">
            <button
              className="btn btn-secondary dropdown-toggle  "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              // style={{ position: "fixed", marginTop: "10px" }}
            >
              Filters
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setFilter("blogs");
                    setPage(0);
                  }}
                >
                  All Blogs
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setFilter("domestic");
                    setPage(0);
                  }}
                >
                  Domestic
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setFilter("International");
                    setPage(0);
                  }}
                >
                  International
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10">
          <Blogs filter={filter} page={page} setPage={setPage}></Blogs>
        </div>
      </div>
      {/* blog section  */}
      <ReviewSection></ReviewSection>
      <Faq></Faq>
    </div>
  );
};

export default Home;
