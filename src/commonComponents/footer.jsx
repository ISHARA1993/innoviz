/** @format */

function FooterComponent() {
  return (
    <footer>
      <div className='footer-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='footer-content'>
                <div className='footer-head'>
                  <div className='footer-logo'>
                    <h2>
                      <img
                        alt='companyLogo'
                        src='img/companyLogo/InnoViz@2x.png'
                        width='130'
                        height='130'
                      />
                    </h2>
                  </div>
                  <p>Software Development outsourcing.</p>
                  <div className='footer-icons'>
                    <ul>
                      <li>
                        <a href='/'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <i className='fa fa-twitter' />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <i className='fa fa-google' />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <i className='fa fa-pinterest' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end single footer */}
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='footer-content'>
                <div className='footer-head'>
                  <h4>information</h4>
                  <p>For more information.</p>
                  <div className='footer-contacts'>
                    {/* <p>
                      <span>Tel:</span> +94-764-763-943
                    </p> */}
                    <p>
                      <span>Email:</span> admin@innoviz.io
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end single footer */}
            <div className='col-md-4 col-sm-4 col-xs-12'>
              <div className='footer-content'>
                <div className='footer-head'>
                  <h4>Instagram</h4>
                  <div className='flicker-img'>
                    <a href='#'>
                      <img src='img/portfolio/1.jpg' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-area-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='copyright text-center'>
                <p>
                  © Copyright <strong>Innoviz</strong>. All Rights Reserved
                </p>
              </div>
              <div className='credits' hidden>
                {/*
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
            */}
                Designed by
                <a href='https://bootstrapmade.com/'>BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
