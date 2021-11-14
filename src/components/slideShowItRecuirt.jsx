/** @format */

import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={11500}>
        <img
          className='d-block w-100'
          src='img/slider/interview.jpg'
          alt='First slide'
          style={{ height: "700px" }}
        />
        <Carousel.Caption>
          <div className='slide-show'>
            <div
              className='animated fadeInDown infinite'
              style={{
                animationDuration: "12000ms",
              }}>
              <h1 style={{ color: "#1ddcf5" }}>IT Recuritment</h1>
              <p>
                <div>
                  Advanced modules, more functionality and competitive edge for
                  your business.
                </div>
              </p>

              <div style={{ float: "left", paddingTop: "70px" }}>
                <a href='#ifs' className='ready-btn-slide'>
                  More Info
                </a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={11500}>
        <img
          className='d-block w-100'
          src='img/slider/light.png'
          alt='Second slide'
          style={{ height: "700px" }}
        />
        <Carousel.Caption>
          <div className='slide-show'>
            <div
              className='animated fadeInRight infinite'
              style={{
                animationDuration: "12000ms",
              }}>
              <h1 style={{ color: "#c56dd6", textAlign: "center" }}>
                Make your business more robust and flexible with our IT
                outsourcing solutions!
              </h1>

              <div style={{ paddingTop: "10px" }}>
                <a href='#applicationDevelop' className='ready-btn-slide'>
                  More Info
                </a>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
