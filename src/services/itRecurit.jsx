/** @format */

import React, { Component } from "react";
import Slideshow from "../components/slideShowItRecuirt";

class ItRecuritment extends Component {
  render() {
    return (
      <div id="itRecurit" className="about-area padding-3">
        <div id="ensign-nivoslider" className="slides">
          <Slideshow />
        </div>
        <div className="about-area area-padding-1">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>Our Process </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="well-middle">
                  <div className="single-well">
                    <p>
                      InnoViz connect you to the professional talent you need.
                      We have a dedicated team and decades of expertise in the
                      IT industry. Our IT professionals are deep expertise in
                      technology skill- set with proven track records. InnoViz
                      able to provide quick and the right candidates to your
                      expectations.
                    </p>
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='work-ifs-left-text'>
              <a href='#'>
                <img src='img/ifsService/ifs-meeting.jpg' alt='' />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ItRecuritment;
