import React from "react";
import { Link } from "gatsby";
import Search from "./Search";
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const NavbarTemplate= () => {
  return (
    /* eslint-disable */
    <>
      {/* <!-- Header --> */}
      <header className="header d-flex flex-row justify-content-end align-items-center trans_200">
        {/* <!-- Logo --> */}
        <div className="logo mr-auto">
          <Link to="/">
            Ran<span>go</span>
          </Link>
        </div>

        {/* <!-- Navigation --> */}
        <nav className="main_nav justify-self-end text-right">
          <ul>
            <li className="active">
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>

          <Search />
        </nav>

        {/* <!-- Hamburger --> */}
        <div className="hamburger_container bez_1">
          <i className="fas fa-bars trans_200"></i>
        </div>
      </header>

      {/* <!-- Menu --> */}
      <div className="menu_container">
        <div className="menu menu_mm text-right">
          <div className="menu_close">
            <i className="far fa-times-circle trans_200"></i>
          </div>
          <ul className="menu_mm">
            <li className="menu_mm active">
              <a href="#">Inicio</a>
            </li>
            <li className="menu_mm">
              <a href="about.html">About Us</a>
            </li>
            <li className="menu_mm">
              <a href="services.html">Services</a>
            </li>
            <li className="menu_mm">
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li className="menu_mm">
              <a href="blog.html">Blog</a>
            </li>
            <li className="menu_mm">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  componentDidMount() {
    window.initHamburger();
  }

  render() {
    return <NavbarTemplate />;
  }
};

export default Navbar;
