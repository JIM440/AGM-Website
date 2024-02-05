import { useState } from 'react';
import logo from '../../assets/images/nav-images/logo1.png';
import facebook from '../../assets/images/nav-images/Facebook.svg';
import twitter from '../../assets/images/nav-images/Twitter.svg';
import instagram from '../../assets/images/nav-images/Instagram.svg';
import youtube from '../../assets/images/nav-images/YouTube.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

const [open, setOpen] = useState(false)
const [dropDownOpen1, setdropDownOpen1] = useState(false)
const [dropDownOpen2, setdropDownOpen2] = useState(false)
const [dropDownOpen3, setdropDownOpen3] = useState(false)

const toggleOpen = () => {
  setOpen(!open)
}

const toggleDropDownOpen1 = () => {
  setdropDownOpen1(!dropDownOpen1)
}
const toggleDropDownOpen2 = () => {
  setdropDownOpen2(!dropDownOpen2)
}
const toggleDropDownOpen3 = () => {
  setdropDownOpen3(!dropDownOpen3)
}

  return (
    <>
      {/* NavBar */}
      <nav className={open ? "clicked" : ''}>
        <div className="container">
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
          <div className={`menu-button ${open ? "clicked" : ''}`} onClick={toggleOpen}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* <!-- mobile nav --> */}
      <div className ={`mobile-nav ${open ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>

          <li>
            <a className={`down ${dropDownOpen1 ? 'active' : ''}`} onClick={toggleDropDownOpen1}>
              <span>About</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen1 ? 'active' : ''}`}>
              <Link to="about/prophetkevin">Prophet Kevin</Link>
              <Link to="about/agm">AGM</Link>
            </div>
          </li>
          <li>
            <Link to="/ministry">
              <span>Ministry</span>
            </Link>
          </li>

          <li>
            <a className={`down ${dropDownOpen2 ? 'active' : ''}`} onClick={toggleDropDownOpen2}>
              <span>Partner</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen2 ? 'active' : ''}`}>
              <Link to="partner/donate">Donation</Link>
              <Link to="partner/partner">Partner</Link>
              <Link to="partner/projects">Projects</Link>
            </div>
          </li>

          <li>
            <a className={`down ${dropDownOpen3 ? 'active' : ''}`} onClick={toggleDropDownOpen3}>
              <span>Contact</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen3 ? 'active' : ''}`}>
              <Link to="contact/prayerrequests">Prayer Requests</Link>
              <Link to="contact/testimonies">Testimonies</Link>
              <Link to="contact/receivesalvation">Receive Salvation</Link>
              <Link to="contact/counselling">Counselling</Link>
              <Link to="contact/invitations">Invitations</Link>
              <Link to="contact/questions">Questions</Link>
              <Link to="contact/partner">Partner</Link>
              <Link to="contact/others">Others</Link>
            </div>
          </li>

          <li>
            <Link to="partner/donate" className="btn">
              Donate
            </Link>
          </li>
        </ul>

        <div className="icons-container">
          <Link to="facebook.com/agmonline">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="youtube.com">
            <img src={youtube} alt="youtube" />
          </Link>
          <Link to="instagram.com">
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to="twitter.com">
            <img src={twitter} alt="twitter" />
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
