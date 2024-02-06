import React from 'react'
import facebook from '../assets/images/nav-images/Facebook.svg'
import subscribe from '../assets/images/article-images/subscribe.jpg'

const SideNews = () => {
  return (
      <>
                <div className="side-news">
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://www.dioceseoflaredo.org/sites/default/files/images/Technology/cross-sunset-humility-devotion-161089-e1505933053195.jpeg" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Receive Christ</h3>
                <p>
                  Experience the love of Christ and it's transforming power that brings hope and eternal joy to your life.
                </p>
                <a href="salvation" className="btn">Receive Christ</a>
              </div>
            </div>
            <div className="subscribe">
              <div>
                <img src={subscribe} alt="" />
                <div>
                  <h3>Prophet Kevin Online</h3>
                  <p><span>54k Followers</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2k subscribers</span></p>
                </div>
              </div>
              <div className="btns">
                <a href="facebook.com/prophetkevinonline" className="btn fb">
                  <img
                    src={facebook}
                    alt="facebook link"
                  />
                  <p>Follow</p>
                </a>
                <a href="youtube.com/prophetkevinonline" className="btn yt">
                  <i className="bi bi-youtube"></i>
                  <p>Subscribe</p>
                </a>
              </div>
            </div>
            <div className="news-letter">
              <h3>Join Our Newsletter</h3>
              <p>
                Sign up to our newletter to receive updates of upcoming events and new materials that will build you up spiritually.
              </p>
              <form action="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="btn">Send</button>
              </form>
            </div>
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://holyspirit.tv/img/book.png" alt="" />
              </div>
              <div className="side-news-text">
                <h3>The Oil Of Favour</h3>
                <p>
                  Experience God's Favor and discover how to align yourself with God's purpose, opening the floodgates to abundant blessings and extraordinary miracles.
                </p>
                <a href="" className="btn">Order Now</a>
              </div>
            </div>

            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://images.squarespace-cdn.com/content/v1/5a1d221bbce17620f86369aa/1656545664935-BKIQSX7ETWBB0Y4E58Y6/PartnerGiving.jpg?format=1500w" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Become a partner</h3>
                <p>
                  Help us reach more people by partnering with us. Join us in sharing the life-transforming message of hope and salvation.
                </p>
                <a href="contact/partner" className="btn">Become a partner</a>
              </div>
            </div>
          </div>
      </>
  )
}

export default SideNews
