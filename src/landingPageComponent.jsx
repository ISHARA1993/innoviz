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
    <div className='about-area'>
      <div className='each-slide-area padding-3'>
        <div id='home'>
          {/* Start Slider Area */}
          <div id='ensign-nivoslider' className='slides'>
            <Slideshow />
          </div>
          {/* End Slider Area */}
        </div>
        {/* Start About area */}
      </div>
      <div id='about' className='about-area area-padding-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>About Us</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='well-middle'>
                <div className='single-well'>
                  <p>
                    We are a Singapore based company with having a technical
                    team operating from Sri Lanka. We provide IFS consultancy
                    services with an in-depth understanding of your
                    requirements, an efficient and responsive team of IFS
                    experts, and a support desk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About area */}
      {/* Start Service area */}
      <div id='services' className='services-area area-padding-7'>
        <div className='row '>
          <div className='col-md-12 col-sm-12 col-xs-12'>
            <div className='section-headline services-head text-center'>
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className='colomn '>
          <div className='container'>
            <div className='row  area-padding-6'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                <a className='services-icon' href='/ifsservices'>
                  {/* <iframe
                    title='ifsYouTube'
                    width='175%'
                    height='355'
                    src=' https://www.youtube.com/embed/ccCiAolHN2k&ab_channel=IFS'
                    // src='https://www.youtube.com/embed/tgbNymZ7vqY'
                  ></iframe> */}
                  <img
                    src='img/services/applicationDev.jpg'
                    title='#applicationDev'
                  />
                </a>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <div className='about-move'>
                  <div className='single-services'>
                    <h2 className='services-topic'>IFS Services</h2>
                    <p className='paragraph'>
                      At InnoViz we want your business to focus on doing what it
                      does best, so with our Services we make sure you don’t
                      have to worry about managing your IFS Apps environments.
                      You will benefit from having the full support and
                      expertise from our consultants who take care of the
                      technical management, and in cooperation with our partners
                      we can offer you a fully hosted environment. Whether in a
                      private or public cloud, we always look for a suitable
                      solution that matches your specific needs. With Cloud
                      managed Services we take care of any incidents or IFS
                      change requests. We can empower you with our 24/7 support
                      services from our highly skilled service desk, or via
                      on-site consultancy. Get in touch with one of our experts
                      to explore how we can elevate your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='services-area-3 '>
            <div id='ifs' className='ifs-box-outSide area-padding-8'>
              <div className='container'>
                <div className='colomn '>
                  <div className='row '>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <HighQualityIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          IFS Service Desk
                        </h1>
                        Offers a single gateway to all the ERP requirements
                        making the process easier and simplified.
                      </p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <StarsIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          IFS Managed Services
                        </h1>
                        Hosting and maintenance of IFS Applications on
                        cloud/on-premise, complete installation & operational
                        support on IFS Applications, Middleware and Oracle
                        Database.
                      </p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <HeadsetMicIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          IFS Consulting Services
                        </h1>
                        Offer an array of consulting services; Pre-study,
                        project execution, end-to end implementation of IFS
                        Applications, and upgrade to newer versions.
                      </p>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <EmojiEventsIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          IFS Development & Integration
                        </h1>
                        We undertake modifications, customizations, upgrade to
                        newer versions and new development of IFS Applications
                        and development of Reports.
                      </p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <BusinessCenterIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Value-Added Services
                        </h1>
                        Offers customized ERP solutions that complement existing
                        IFS modules and enhances their functionalities.
                      </p>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 ifs-box-area '>
                      <p className='container'>
                        <h1>
                          <DeveloperModeIcon
                            style={{
                              fontSize: "35px",
                              paddingRight: "5px",
                              color: "#bbff00",
                            }}
                          />
                          Field Service Management
                        </h1>
                        IFS Field Service Management offers the most complete
                        service lifecycle management solution.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ paddingTop: "20px", textAlign: "center" }}>
                  <a href='/ifsservices' className='ready-btn-services '>
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id='applicationDevelop'
            className='services-area-2 area-padding-6'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-6 col-xs-12 '>
                  <div className='single-services'>
                    <h2 className='services-topic'>Application developments</h2>
                    <p className='paragraph'>
                      Build, run, and operate cloud-native apps with us. Embrace
                      modern approaches like serverless, microservices, and
                      containers. Quickly code, build, deploy, and manage
                      without compromising security or quality. We accelerate
                      engineering productivity and simplify operations with
                      automated end-to-end tooling.
                    </p>
                  </div>
                </div>
                <div className='col-md-6 col-sm-6 col-xs-12 '>
                  <div className='about-move'>
                    <a className='services-icon' href='#'>
                      <img
                        alt='applicationDev'
                        src='img/services/ifsServices.jpg'
                        title='#ifsService'
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

      {/* Start Testimonials */}
      <div className='testimonials-area'>
        <div className='testi-inner area-padding'>
          <div className='testi-overly' />
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-sm-12 col-xs-12'>
                {/* Start testimonials Start */}
                <div className='testimonial-content text-center'>
                  <a className='quate' href='#'>
                    <i className='fa fa-quote-right' />
                  </a>
                  {/* start testimonial carousel */}
                  <div className='testimonial-carousel'>
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          Cloud-native applications are a collection of small,
                          independent, and loosely coupled services. ... If an
                          app is "cloud-native," it's specifically designed to
                          provide a consistent development and automated
                          management experience across private, public, and
                          hybrid clouds.
                        </p>
                        <h6>AWS</h6>
                      </div>
                    </div>
                    {/* End single item */}
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          The microservice architecture enables the rapid,
                          frequent and reliable delivery of large, complex
                          applications. It also enables an organization to
                          evolve its technology stack.
                        </p>
                        {/*<h6>Jhon</h6>*/}
                      </div>
                    </div>
                    {/* End single item */}
                    <div className='single-testi'>
                      <div className='testi-text'>
                        <p>
                          CI/CD is a method to frequently deliver apps to
                          customers by introducing automation into the stages of
                          app development. The main concepts attributed to CI/CD
                          are continuous integration, continuous delivery, and
                          continuous deployment.
                        </p>
                        {/*<h6>Fleming</h6>*/}
                      </div>
                    </div>
                    {/* End single item */}
                  </div>
                </div>
                {/* End testimonials end */}
              </div>
              {/* End Right Feature */}
            </div>
          </div>
        </div>
        {/* End service Area */}

        <div className='reviews-area hidden-xs'>
          <div className='work-us '>
            <div className='column'>
              <div className='work-left-text'>
                <a href='#'>
                  <img src='img/about/3.jpg' alt='' />
                </a>
              </div>

              <div className='work-right-text text-center '>
                <div>
                  <h2>working with us</h2>
                  <h5>
                    Agile Teams, Cutting Edge Technologies, State-of-the Art
                    Office
                  </h5>
                  <a href='/careers' className='ready-btn'>
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
      <div className='suscribe-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs=12'>
              <div className='suscribe-text text-center'>
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
