import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ContactLayout = () => {
  return (
    <>
      <section id="contact-form" className="prayer-requests">
        <div className="container">
          <p>
            For prayer requests, receive salvation, testimonies, counseling,
            questions, invitations, and any other needs, please feel free to
            contact us. Simply choose the category that applies to your specific
            request or inquiry.
            <br />
            <br />
            Before submitting the form, we encourage you to take a moment to
            review our frequently asked questions below. These FAQs may provide
            helpful information and answers to common queries.
          </p>

          {/* <!-- nav links --> */}
          <div className="nav-links">
            <NavLink to="prayerrequests">Prayer Requests</NavLink>
            <NavLink to="testimonies">Testimonies</NavLink>
            <NavLink to="salvation">Receive Salvation</NavLink>
            <NavLink to="counselling">Counselling</NavLink>
            <NavLink to="invitation">Invitations</NavLink>
            <NavLink to="questions">Questions</NavLink>
            <NavLink to="partner">Partner</NavLink>
            <NavLink to="others">Others</NavLink>
          </div>

          {/* Outlet Start Here */}

          <Outlet />

          {/* Outlet End Here */}


        </div>
      </section>

      {/* <!-- ==== ========= faqs section ========== ==== --> */}
      <section id="faqs-section">
        <div className="container container-faqs-section">
          <h2 className="header">Frequently Asked Questions</h2>
          <div className="faqs-container">
            <div className="faqs">
              <div className="question">
                <h3>Who are we?</h3>
                <i className="bi bi-chevron-down"></i>
              </div>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
                voluptas suscipit?
              </p>
            </div>
            <div className="faqs">
              <div className="question">
                <h3>How can I give to AGM?</h3>
                <i className="bi bi-chevron-down"></i>
              </div>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
                voluptas suscipit?
              </p>
            </div>
            <div className="faqs">
              <div className="question">
                <h3>How can I become a partner?</h3>
                <i className="bi bi-chevron-down"></i>
              </div>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
                voluptas suscipit?
              </p>
            </div>
            <div className="faqs">
              <div className="question">
                <h3>How can I get help?</h3>
                <i className="bi bi-chevron-down"></i>
              </div>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
                voluptas suscipit?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- --------- ------- contact info ------- ----------- --> */}
      <section id="contact-info">
        <div className="container">
          <div className="even-columns">
            <div>
              <div>
                <i className="bi bi-geo-alt-fill"></i>
                <p>Preventive street Buea-road Kumba, South-West Cameroon</p>
              </div>
              <div>
                <i className="bi bi-telephone-fill"></i>
                <p>
                  237 654 210 235 <br />
                  237 678 384 473
                </p>
              </div>
              <div>
                <i className="bi bi-envelope-fill"></i>
                <p>info@agm-support.com</p>
              </div>
              <div className="links">
                <a href="facebook.com">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="instagram.com">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="youtube.com">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="twitter.com">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="tiktok.com">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
            <div className="even-column-img">
              <iframe title='Google Map'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3976.789603432982!2d9.447079775918569!3d4.631590419569697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1060c72e550a4ff3%3A0x9191e4ac70783393!2sProphet%20Kevin%20Church!5e0!3m2!1sen!2scm!4v1704224829128!5m2!1sen!2scm"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactLayout;
