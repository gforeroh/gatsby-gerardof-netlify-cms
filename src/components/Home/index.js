import React from "react";

// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import homeBackground from "../../../static/assets/images/home_background.jpg";
import IconBoxes from "./IconBoxes";
import VerticalSlider from "./VerticalSlider";
import Services from "./Services";
import Features from "./Features";


const HomePageTemplate = () => {
  return (
    <>
      <div className="home">
        <div className="home_background_container prlx_parent">
          <div
            className="home_background prlx"
            style={{ backgroundImage: `url(${homeBackground})` }}
          ></div>
        </div>

        {/* <!-- Hero Slider --> */}
        <div className="hero_slider_container">
          {/* <!-- Slider --> */}
          <div className="owl-carousel owl-theme hero_slider">
            {/* <!-- Slider Item --> */}
            <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
              <span>by</span>
              <span>
                <img src="../assets/images/colorlib.png" alt="" />
              </span>
              <span>GO!</span>
              <span>Get your freebie template now!</span>
            </div>

            {/* <!-- Slider Item --> */}
            <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
              <span>by</span>
              <span>
                <img src="../assets/images//colorlib.png" alt="" />
              </span>
              <span>GO!</span>
              <span>Get your freebie template now!</span>
            </div>

            {/* <!-- Slider Item --> */}
            <div className="owl-item hero_slider_item item_1 d-flex flex-column align-items-center justify-content-center">
              <span>by</span>
              <span>
                <img src="../assets/images//colorlib.png" alt="" />
              </span>
              <span>GO!</span>
              <span>Get your freebie template now!</span>
            </div>
          </div>

          {/* <!-- Hero Slider Navigation Left --> */}
          <div className="hero_slider_nav hero_slider_nav_left">
            <div className="hero_slider_prev d-flex flex-column align-items-center justify-content-center trans_200">
              <i className="fas fa-chevron-left trans_200"></i>
            </div>
          </div>

          {/* <!-- Hero Slider Navigation Right --> */}
          <div className="hero_slider_nav hero_slider_nav_right">
            <div className="hero_slider_next d-flex flex-column align-items-center justify-content-center trans_200">
              <i className="fas fa-chevron-right trans_200"></i>
            </div>
          </div>
        </div>

        <div className="hero_side_text_container">
          <div className="double_arrow_container d-flex flex-column align-items-center justify-content-center">
            <div className="double_arrow nav_links" data-scroll-to=".icon_boxes">
              <i className="fas fa-chevron-left trans_200"></i>
              <i className="fas fa-chevron-left trans_200"></i>
            </div>
          </div>
          <div className="hero_side_text">
            <h2>Modern design easy to use</h2>
            <p>
              Maecenas id orci rutrum, vehicula nunc sit amet, fringilla ante.
              Nulla efficitur vitae ligula commodo varius.
            </p>
          </div>
        </div>

        <div className="next_section_scroll">
          <div className="next_section nav_links" data-scroll-to=".icon_boxes">
            <i className="fas fa-chevron-down trans_200"></i>
            <i className="fas fa-chevron-down trans_200"></i>
          </div>
        </div>
      </div>
      <IconBoxes />
      <VerticalSlider />
      <Services />
      <Features />
    </>
  );
};

class HomePage extends React.Component {
  componentDidMount() {
    // code to run on component mount
    window.initMainSlider();
    window.initScrolling();
  }

  render() {
    return <HomePageTemplate />;
  }
}

export default HomePage;
