import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="row banner-bg">
      <Carousel className="col-md-6 gx-5">
        <Carousel.Item>
          <img
            className="d-block w-100  "
            // style={{ height: "70vh" }}
            src={banner1}
            alt="bike"
          />
          <Carousel.Caption>
            <h3>Desire</h3>
            <p>Choose Your Most Desired Bike</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner3}
            // style={{ height: "70vh" }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Dream</h3>
            <p>We make your dream happens</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner2}
            // style={{ height: "70vh" }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Passion</h3>
            <p>What is life but full of passions </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="top-line col-md-6 gx-5 gy-2">
        <div>
          <h1>TripStories</h1>
          <h4>Uplifting Communities By The Power of tourism</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
