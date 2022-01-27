import React, { useState } from "react";

import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import BlogSection from "../BlogSection/BlogSection";
import Faq from "../FAQ/Faq";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  const [filter, setFilter] = useState("blogs");
  return (
    <div id="home" className="">
      <Banner></Banner>
      <div className="container row mx-auto mt-2">
        <div className="col-sm-2">
          <h4>Filters</h4>
          <button onClick={() => setFilter("blogs")}>All blogs</button>
          <button onClick={() => setFilter("domestic")}>domestic</button>
        </div>
        <div className="col-10">
          <Blogs filter={filter}></Blogs>
        </div>
      </div>
      <ReviewSection></ReviewSection>
      <Faq></Faq>
    </div>
  );
};

export default Home;
