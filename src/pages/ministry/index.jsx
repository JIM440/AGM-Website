// when making json for vidos, categorise them as ministry teaching healing etc.
import React from 'react'
import facebook from '../../assets/images/nav-images/Facebook.svg'
import instagram from '../../assets/images/nav-images/Instagram.svg'

const Ministry = () => {
  return (
    <>
      
      {/* <!-- social container --> */}
      <section id="social-container">
        <div className="container">
            <div>
                <a href="../facebook.com"><img src={facebook} alt="" /><p>Follow</p>
                </a>
                
                <a href="../youtube.com">
                  <i className="bi bi-youtube"></i>
                  <p>Subscribe</p></a>
                <a href="../instagram.com">
                  <img src={instagram} alt="" />
                    <p>Follow</p>
                    </a>
            </div>
        </div>
      </section>

    <section id="featured-videos">
        <div className="container">
  
          <div className="video-container">
            <div className="videos">
              <h2 className="header">Teaching Ministry</h2>

              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wJ3O3kHZE0c?si=zvCKQt4YJUifuxCe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">THE WORD OF HIS POWER By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MLo-hZPMGdg?si=wNNuPMluMrjE8NBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">STANDING COMPLETE IN ALL THE WILL OF GOD By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/aRiGEN2aFUQ?si=SCsGj86_5onPTzQF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">
  CONTENDING FOR THE FAITH By Prophet Kevin N. </h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <h2 className="header">Healing Ministry</h2>

              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wJ3O3kHZE0c?si=zvCKQt4YJUifuxCe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">THE WORD OF HIS POWER By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MLo-hZPMGdg?si=wNNuPMluMrjE8NBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">STANDING COMPLETE IN ALL THE WILL OF GOD By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/aRiGEN2aFUQ?si=SCsGj86_5onPTzQF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">
  CONTENDING FOR THE FAITH By Prophet Kevin N. </h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>

              {/* <!-- prophetic mandate --> */}
              <h2 className="header">Prophetic Ministry</h2>

              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wJ3O3kHZE0c?si=zvCKQt4YJUifuxCe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">THE WORD OF HIS POWER By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MLo-hZPMGdg?si=wNNuPMluMrjE8NBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">STANDING COMPLETE IN ALL THE WILL OF GOD By Prophet Kevin N.</h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/aRiGEN2aFUQ?si=SCsGj86_5onPTzQF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h3 className="video-title">
  CONTENDING FOR THE FAITH By Prophet Kevin N. </h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <a href="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </a>
                  <a href="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- side news --> */}
            <div className="side-news">
              <div className="side-news-card">
                <div className="side-news-image">
                  <img src="https://www.dioceseoflaredo.org/sites/default/files/images/Technology/cross-sunset-humility-devotion-161089-e1505933053195.jpeg" alt="" />
                </div>
                <div className="side-news-text">
                  <h2>Receive Christ</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, repudiandae.
                  </p>
                  <a href="" className="btn">Receive Christ</a>
                </div>
              </div>
              <div className="subscribe">
                <div>
                  <img src="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-1/415987895_914223870095213_4984103714017541932_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=596444&_nc_ohc=Du_2e5m_thUAX9DIbrB&_nc_ht=scontent-lis1-1.xx&cb_e2o_trans=t&oh=00_AfB1wrdinV13L2Tpbgmbej7Ir6CzLS58jQ4ZMpCmW9072w&oe=6599D2AC" alt="" />
                  <h2>Prophet Kevin Online</h2>
                </div>
                <div className="btns">
                  <a href="../facebook.com/prophetkevinonline" className="btn fb">
                    <img
                      src={facebook}
                      alt="facebook link"
                    />
                    <p>Follow</p>
                  </a>
                  <a href="../youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bi bi-youtube"></i>
                    <p>Subscribe</p>
                  </a>
                </div>
              </div>
              <div className="news-letter">
                <h3>Join Our Newsletter</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  suscipit dolorum unde voluptatem.
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
                  <h3>Book Name</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, repudiandae.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, repudiandae.
                  </p>
                  <a href="../partner/partner.html" className="btn">Become a partner</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ministry
