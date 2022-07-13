import React from "react";
import { Carousel } from "react-bootstrap";
import ImgOne from "../../image/img_1.png";
import ImgTwo from "../../image/img_2.png";
import ImgThree from "../../image/img_3.png";

const BannerSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ImgOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome! Fake Shop Website</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={ImgTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>EXTRA 20% OFF</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImgThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Find Out Your Best Product</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
