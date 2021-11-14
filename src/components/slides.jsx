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
          src='img/slider/blockchain_tech.jpg'
          alt='First slide'
          style={{ height: "550px" }}
        />
        <Carousel.Caption>
          <div className='slide-show'>
            <div
              className='animated fadeInDown infinite'
              style={{
                animationDuration: "12000ms",
              }}>
              <h1 style={{ color: "#e755fa" }}></h1>
              <p>
                <div>
                  We help you with Implementation , Upgrade & Migration ,
                  Support & Maintenance , Managed Services.
                </div>
              </p>
              <table>
                <td>
                  <img
                    src=''

                  />
                </td>
              </table>
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
          src='img/slider/webApplication.jpg'
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
              <h1>Application Development</h1>
              <br></br>
              <div style={{ float: "left", paddingTop: "70px" }}>
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
