import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-around bg-dark text-light py-5 mt-5">
      <div className="d-flex justify-content-around">
        <div>
          <i class="fab fa-facebook"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-twitter-square"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-instagram-square"></i>
        </div>
        <div className="px-5">
          <i class="fab fa-reddit-square"></i>
        </div>
      </div>
      <div>
        <i class="far fa-copyright"></i>All rights reserved
      </div>
    </div>
  );
};

export default Footer;
