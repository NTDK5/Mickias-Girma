import React from "react";
import {
  FaHome,
  FaUser,
  FaFile,
  FaBook,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { FaXmark, FaBars } from "react-icons/fa6";
import "./home.css";
import Typed from "react-typed";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [menu, togglemenu] = useState(false);
  return (
    <>
      <header id="header" className={menu ? "toggle-header" : "header"}>
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
              >
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
              >
                <FaUser />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
              >
                <FaFile />
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
              >
                <FaBook /> <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
              >
                <FaEnvelope /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hamburger-menu" onClick={() => togglemenu(!menu)}>
        {menu ? <FaXmark /> : <FaBars />}
      </div>

      <section className="hero" id="home">
        <div className="container">
          <h1>Mickias Girma</h1>
          <p>
            i'm
            <span>
              <Typed
                strings={["Designer", "Freelancer", "Photographer"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </span>
          </p>
          <div className="social">
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaSkype />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
