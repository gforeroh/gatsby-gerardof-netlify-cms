import React from 'react'
// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

/* eslint-disable */
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* <!-- Footer Intro --> */}
              <div className="footer_intro">
                {/* <!-- Logo --> */}
                <div className="logo footer_logo">
                  <a href="/#" rel="noreferrer">
                    Ran<span>go</span>
                  </a>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae enim enim. Sed nec dignissim purus.
                </p>

                {/* <!-- Social --> */}
                <div className="footer_social">
                  <ul>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Copyright --> */}
                <div className="footer_cr">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </div>
              </div>
            </div>

            {/* <!-- Footer Services --> */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Services</div>
                <ul>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Management
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Branding
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer_col">
                <div className="footer_col_title">Aditionals</div>
                <ul>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Social media
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Management
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Branding
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer Menu --> */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Menu</div>
                <ul>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer About --> */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">About us</div>
                <ul>
                  <li>
                    <a href="/#" rel="noreferrer">
                      The team
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      History
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer Community --> */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Community</div>
                <ul>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Forums
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Q&A
                    </a>
                  </li>
                  <li>
                    <a href="/#" rel="noreferrer">
                      Purposes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* <!-- Copyright --> */}
              <div className="footer_cr_2">2017 All rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer
