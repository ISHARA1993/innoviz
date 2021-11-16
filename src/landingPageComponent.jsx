/** @format */

import React from "react";
import ContactUs from "./services/contactUs";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import StarsIcon from "@material-ui/icons/Stars";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
// import Careers from "./careers/careers";
import Slideshow from "./components/slides";

function LandingPageComponent() {
  return (
    <div className="about-area">
      <div className="each-slide-area padding-3">
        <div id="home">
          {/* Start Slider Area */}
          <div id="ensign-nivoslider" className="slides">
            <Slideshow />
          </div>
          {/* End Slider Area */}
        </div>
        {/* Start About area */}
      </div>
      <div id="about" className="about-area area-padding-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="well-middle">
                <div className="single-well">
                  <p>
                    Innoviz is a Blockchain Development and Consultancy company
                    based in Singapore. We help startups and enterprises
                    leverage the decentralized network, built solutions on
                    blockchain and introduce a new level of transparency,
                    efficiency and automation into business processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About area */}
      {/* Start Service area */}
      <div id="services" className="services-area area-padding-7">
        <div className="row ">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline services-head text-center">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="colomn ">
          <div className="container">
            <div className="row  area-padding-6">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                <a className="services-icon" href="/ifsservices">
                  {/* <iframe
                    title='ifsYouTube'
                    width='175%'
                    height='355'
                    src=' https://www.youtube.com/embed/ccCiAolHN2k&ab_channel=IFS'
                    // src='https://www.youtube.com/embed/tgbNymZ7vqY'
                  ></iframe> */}
                  <img
                    src="img/services/applicationDev.jpg"
                    title="#applicationDev"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="about-move">
                  <div className="single-services">
                    <h2 className="services-topic">
                      Custom Blockchain Software Development
                    </h2>
                    <p className="paragraph">
                      At InnoViz we expertise at delivering custom blockchain
                      software solutions and help our clients and partners
                      develop enterprise dApps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-area-3 ">
            <div id="ifs" className="ifs-box-outSide area-padding-8">
              <div className="container">
                <div className="colomn ">
                  <div className="row ">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area ">
                      <p className="container">
                        <h1>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Blockchain Consulting
                        </h1>
                        We provides consultion on how the adoption of blockchain
                        can benefit your enterprise solution and bring trust and
                        transparency to the system.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area ">
                      <p className="container">
                        <h1>
                          <StarsIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          dApps Development
                        </h1>
                        From ideation to design and development, our blockchain
                        developers build enterprise-grade decentralized
                        applications to help clients accelerate time to market
                        and maximize ROI.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area ">
                      <p className="container">
                        <h1>
                          <HeadsetMicIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Smart Contracts Development
                        </h1>
                        Our smart contract development team can develop and
                        deploy smart contracts for public and private blockchain
                        networks. We have built smart contracts for
                        crowdfunding, blockchain supply chain solutions and
                        various dApps.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area ">
                      <p className="container">
                        <h1>
                          <BusinessCenterIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Application Development
                        </h1>
                        Offers customized ERP solutions that complement existing
                        IFS modules and enhances their functionalities.
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area ">
                      <p className="container">
                        <h1>
                          <DeveloperModeIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Tallent Aquisition
                        </h1>
                        We can help you to find the best candidate to fill your
                        need. Let us take the burden of intial screening to
                        technical interviews to filter out the best tallents for
                        you.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "20px", textAlign: "center" }}>
                  <a href="/ifsservices" className="ready-btn-services ">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="applicationDevelop"
            className="services-area-2 area-padding-6"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 ">
                  <div className="single-services">
                    <h2 className="services-topic">Application developments</h2>
                    <p className="paragraph">
                      Build, run, and operate cloud-native apps with us. Embrace
                      modern approaches like serverless, microservices, and
                      containers. Quickly code, build, deploy, and manage
                      without compromising security or quality. We accelerate
                      engineering productivity and simplify operations with
                      automated end-to-end tooling.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 ">
                  <div className="about-move">
                    <a className="services-icon" href="#">
                      <img
                        alt="applicationDev"
                        src="img/services/ifsServices.jpg"
                        title="#ifsService"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id='wso2' className='container area-padding-6'>
            <div className='row '>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <a className='services-icon' href='#'>
                  <img
                    alt='wso2Support'
                    src='img/services/wso2.jpg'
                    title='#wso2'
                  />
                </a>
              </div>
              <div className='col-md-6 col-sm-6 col-xs-12 '>
                <div className='about-move'>
                  <div className='single-services'>
                    <h2 className='services-topic'>WSO2 Support</h2>
                    <p className='paragraph'>
                      Integration based on open standards is the ultimate
                      combination, but things can get complex very quickly. Not
                      to worry. We offer support in pretty much every way
                      possible, for as long as you need it. Bulletproof all you
                      want; reality is often much different than your plans. So
                      when you get started with your new integration solution,
                      you will run into some problems eventually. That’s OK.
                      Fire-fighting and troubleshooting are part of the job. But
                      if you don’t have the expertise or time to do it yourself,
                      you have plenty of options. Let’s talk you through the
                      support services we offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="testimonials-area ">
        {/* <div className="testi-inner area-padding">
          <div className="testi-overly" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
               
                <div className="testimonial-content text-center">
                  <a className="quate" href="#">
                    <i className="fa fa-quote-right" />
                  </a>
                  
                  <div className="testimonial-carousel">
                    <div className="single-testi">
                      <div className="testi-text">
                        <p></p>
                        <h6></h6>
                      </div>
                    </div>
                   
                    <div className="single-testi">
                      <div className="testi-text">
                        <p></p>
                        <h6>Jhon</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="reviews-area hidden-xs">
          <div className="work-us ">
            <div className="column">
              <div className="work-left-text">
                <a href="#">
                  <img src="img/about/3.jpg" alt="" />
                </a>
              </div>

              <div className="work-right-text text-center ">
                <div>
                  <h2>working with us</h2>
                  <h5>
                    Agile Teams, Cutting Edge Technologies, State-of-the Art
                    Office
                  </h5>
                  <a href="/careers" className="ready-btn">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End reviews Area */}
      </div>
      {/* End Testimonials */}
      {/* Start Suscrive Area */}
      <div className="suscribe-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
              <div className="suscribe-text text-center">
                <h3>Welcome to InnoViz</h3>
                {/*<a class="sus-btn" href="#">Get A quate</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Suscrive Area */}
      {/* Start contact Area */}
      <ContactUs />
      {/* End Contact Area */}
    </div>
  );
}

export default LandingPageComponent;
