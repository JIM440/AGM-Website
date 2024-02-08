// when making json for vidos, categorise them as ministry teaching healing etc.
import facebook from '../../assets/images/nav-images/Facebook.svg';
import instagram from '../../assets/images/nav-images/Instagram.svg';
import SideNews from '../../common/SideNews';
import UseScrollTop from '../../common/components/UseScrollTop';

const Ministry = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>
      {/* <!-- social container --> */}
      <section id="social-container">
        <div className="container">
          <div>
            <a href="../facebook.com">
              <img src={facebook} alt="" />
              <p>Follow</p>
            </a>

            <a href="../youtube.com">
              <i className="bi bi-youtube"></i>
              <p>Subscribe</p>
            </a>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P6Xj8dACX-8?si=lIIMfxKODOhxt592"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  ENGAGING THE PROFIT OF THE WORD By Prophet Kevin N.
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kJYuIVJ9Ipk?si=yZ_TKieOAO_rUQjv"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  THE BLOOD THAT SPEAKS BETTER THINGS By Prophet Kevin N.
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1_p0e5pSx38?si=zyvYPV5ShW9HNSdr"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  GENERATING SPIRITUAL FIRE By Prophet Kevin N.{' '}
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/myRNOBmWNFs?si=EZ9ZmzZw8Zis-sJ7"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  ATMOSPHERE OF MIRACLES: HEALING SERVICE By Prophet Kevin N.
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/aRiGEN2aFUQ?si=SCsGj86_5onPTzQF"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  CONTENDING FOR THE FAITH By Prophet Kevin N.{' '}
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CLoSvHo-Gmg?si=cLmIBlzM-OnwDw1v"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  PROPHETIC ARROWS By Prophet Kevin N.
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nN6HxCLIHbg?si=DJiuAcE89a5Q6Od0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  ENGAGING THE PROPHETIC WORD By Prophet Kevin N.
                </h3>
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/hPGLKEXe78U?si=A1MhBep6KwAmUHJl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  DESPISE NOT PROPHESYING By Prophet Kevin N.{' '}
                </h3>
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
            
            <SideNews />
          </div>
        </div>
      </section>
    </>
  );
};

export default Ministry;
