import React from 'react';
import logo from '../../assets/images/nav-images/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-grid-container">
          <div className="footer-grid-box">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
              <div>
                <h2>Apostolic Gospel Mission</h2>
                <p>
                  Establishing the kingdom the power and the glory of God in the
                  lives of men.
                </p>
              </div>
            </Link>
            <form action="" className="flex-col">
              <h3>Subscribe To Our Newsletter</h3>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="newsletter-email"
                  required
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="social-links">
              <a href="/facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/youtube.com">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="/instagram.com">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/whatsapp.me">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-grid-box links">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="ministry">Ministry</Link>
              </li>
              <li>
                <Link to="partner">Partner</Link>
              </li>
              <li>
                <Link to="contact/prayerrequests">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-grid-box Ministry">
            <p>Our Ministry</p>
            <ul>
              <li>
                <Link to="about/agm">AGM</Link>
              </li>
              <li>
                <Link to="articles">Articles</Link>
              </li>
              <li>
                <Link to="testimonies">Testimonies</Link>
              </li>
              <li>
                <Link to="salvation">Receive Christ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-grid-box contact">
            <p>Contact</p>
            <ul>
              <li>
                <Link to="contact/prayerrequests">Contact Us</Link>
              </li>
              <li>
                <i className="bx bxs-phone"></i>
                <p>656842532</p>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <p>Preventive Street Buea-Road Kumba Cameroon</p>
              </li>

              <li>
                <i className="bi bi-envelope"></i>
                <p>info@agm-support.com</p>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <p>
            <i className="bi bi-c-circle"></i> &nbsp;&nbsp;2023 AGM | All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
