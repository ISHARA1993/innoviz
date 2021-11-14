/** @format */
import React, { Component } from "react";
import Slideshow from "../components/slideShowIfs";

class IfsServices extends Component {
  render() {
    return (
      //to change css go to style.css serach .ifs-services-page
      <div id='ifsservice' className='about-area padding-3'>
        <div className='bend niceties preview-1'>
          <div id='ensign-nivoslider' className='slides'>
            <Slideshow />
          </div>
        </div>
        <div className='about-area area-padding-1'>
          <div className='col-md-12 col-sm-12 col-xs-12'>
            <div className='section-headline text-center'>
              <h2>IFS Services</h2>
            </div>
          </div>
          <div className='colomn '>
            <div className='container'>
              <div className='row  area-padding-6'>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                  <a className='services-icon' href='#'>
                    <img src='img/ifsService/ifs-meeting.jpg' alt='' />
                  </a>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                  <div className='about-move'>
                    <div className='single-services'>
                      <h2 className='services-topic'>
                        IFS System Administrator
                      </h2>
                      <p className='paragraph'>
                        Work with the experts in ERP software, consultancy and
                        managed services Delivering the best possible results
                        for our customers as a Channel Partner for IFS and Infor
                        M3 CloudSuite, two of the world’s leading ERP software
                        vendors. Our consultants can work with you from initial
                        implementation roll out through to upgrades, projects
                        and ongoing optimisation and support using our Managed
                        Services team. Our network of Infor and IFS consultants
                        have over 15 years’ experience, and have completed more
                        than 275 projects across 25 countries. You can rely on
                        Anthesis to provide the technical and functional
                        experience needed for you to be successful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IfsServices;
