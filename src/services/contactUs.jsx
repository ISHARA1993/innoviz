/** @format */
import EmailUs from "./emailUs";

function ContactUs() {
  return (
    <div id='contact' className='contact-area'>
      <div className='contact-inner area-padding'>
        <div className='contact-overly' />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='section-headline text-center'>
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='contact-icon text-center'>
                <div className='single-icon'>
                  <i className='fa fa-envelope-o' />
                  <p>
                    Email: hello@innoviza.xyz
                    <br />
                    <span />
                  </p>
                </div>
              </div>
            </div>
            {/* Start contact icon column */}
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='contact-icon text-center'>
                <div className='single-icon'>
                  <i className='fa fa-map-marker' />
                  <p>
                    196 Pantech Business Hub, #04-10,
                    <br /> Singapore 128384
                    <br />
                    <em style={{ color: "#000080" }}>Tel:+6587957628</em>
                    <span></span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='contact-icon text-center'>
                <div className='single-icon'>
                  <i className='fa fa-map-marker' />
                  <p>
                    14 Sir Baron Jayatilaka Mawatha,
                    <br /> Colombo, Sri Lanka
                    <br />
                    {/* <em style={{ color: "#000080" }}>Tel:+94764763943</em> */}
                    <span></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-5 col-lg-6'>
              <img
                alt='companyLocation'
                title='location'
                src='img/contactUs/world.png'
                width='505px'
                height='500px'
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden='false'
                tabIndex={0}
                style={{ paddingBottom: "10px" }}
              />
            </div>
            {/* <div className='col-sm-12 col-md-5 col-lg-6'>
              <EmailUs />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
