import { useState, useEffect } from 'react';
import logo from '../../assets/images/nav-images/logo1.png';
import facebook from '../../assets/images/nav-images/Facebook.svg';
import twitter from '../../assets/images/nav-images/Twitter.svg';
import instagram from '../../assets/images/nav-images/Instagram.svg';
import youtube from '../../assets/images/nav-images/YouTube.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {


  // states
const [open, setOpen] = useState(false)
const [dropDownOpen1, setdropDownOpen1] = useState(false)
const [dropDownOpen2, setdropDownOpen2] = useState(false)
const [dropDownOpen3, setdropDownOpen3] = useState(false)
const [topVisible, setTopVisible] = useState(false)


// functions
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

const toggleAll = () => {
  setdropDownOpen3(false)
  setdropDownOpen2(false)
  setdropDownOpen1(false)
  setOpen(false)
  
  top()
}

const top = () => {
  window.scrollTo({
    top: 0,
    behaviour: 'smooth',
  })
}

//useEffect is used to attach the event listener when the component is mounted and detach it otherwise
useEffect (() => {
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if ( scrollY > 100){
      setTopVisible(true)
    }
    else{
      setTopVisible(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  // return statement is used to remove the event listener before the component is unmounted
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])


  return (
    <>
      {/* NavBar */}
      <nav className={open ? "clicked" : ''}>
        <div className="container">
          <Link to="/" className="logo" onClick={toggleAll}>
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

<a onClick={top} className={`scrollTop ${topVisible ? "active" : ''}`}>
<i className="bx bx-up-arrow-alt"></i>
</a>

      {/* <!-- mobile nav --> */}
      <div className ={`mobile-nav ${open ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleAll}>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <a className={`down ${dropDownOpen1 ? 'active' : ''}`} onClick={toggleDropDownOpen1}>
              <span>About</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen1 ? 'active' : ''}`}>
              <Link to="about/" onClick={toggleAll}>Prophet Kevin</Link>
              <Link to="about/agm" onClick={toggleAll}>AGM</Link>
            </div>
          </li>
          <li>
            <Link to="/ministry" onClick={toggleAll}>
              <span>Ministry</span>
            </Link>
          </li>

          <li>
            <a className={`down ${dropDownOpen2 ? 'active' : ''}`} onClick={toggleDropDownOpen2}>
              <span>Partner</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen2 ? 'active' : ''}`}>
              <Link  onClick={toggleAll} to="partner/donate">Donation</Link>
              <Link  onClick={toggleAll} to="partner/">Partner</Link>
              <Link  onClick={toggleAll} to="partner/project">Projects</Link>
            </div>
          </li>

          <li>
            <a className={`down ${dropDownOpen3 ? 'active' : ''}`} onClick={toggleDropDownOpen3}>
              <span>Contact</span>
              <i className="bi bi-chevron-down"></i>
            </a>
            <div className={`drop-down ${dropDownOpen3 ? 'active' : ''}`}>
              <Link onClick={toggleAll} to="contact/prayerrequests">Prayer Requests</Link>
              <Link to="contact/testimonies">Testimonies</Link>
              <Link onClick={toggleAll} to="contact/salvation">Receive Salvation</Link>
              <Link onClick={toggleAll} to="contact/counselling">Counselling</Link>
              <Link onClick={toggleAll} to="contact/invitations">Invitations</Link>
              <Link onClick={toggleAll} to="contact/questions">Questions</Link>
              <Link onClick={toggleAll} to="contact/partner">Partner</Link>
              <Link onClick={toggleAll} to="contact/others">Others</Link>
            </div>
          </li>

          <li>
            <Link to="partner/donate" className="btn" onClick={toggleAll}>
              Donate
            </Link>
          </li>
        </ul>

        <div className="icons-container">
          <Link to="facebook.com/agmonline" onClick={toggleAll}>
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="youtube.com" onClick={toggleAll}>
            <img src={youtube} alt="youtube" />
          </Link>
          <Link to="instagram.com" onClick={toggleAll}>
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to="twitter.com" onClick={toggleAll}>
            <img src={twitter} alt="twitter" />
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;
