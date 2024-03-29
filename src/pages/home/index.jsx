import { Link } from 'react-router-dom';
import tower from '../../assets/images/AGM-images/tower.jpeg';
import Hero from '../../common/Hero';
import SideNews from '../../common/SideNews';
import useScrollTop from '../../common/components/UseScrollTop';
import Content from '../../common/components/Content';
import { useState } from 'react';
import FetchArticles from '../../common/Data/FetchArticles';

const Home = () => {
  const scrollToTop = useScrollTop();
  const [data, setData] = useState([]);

  FetchArticles()
    .then((data) => {
      // Use the fetched data here
      setData(data[0].data.articles.home);
    })
    .catch((error) => {
      // Handle the error
      console.error('Error in component:', error);
    });

  return (
    <>
      {/* <!-- hero section --> */}
      <Hero />

      {/* <!--=== intro section ===--> */}
      <section id="intro">
        <div className="container">
          <div className="even-columns">
            <div>
              <h2 className="header">Welcome To AGM!</h2>
              <p>
                Welcome to the Apostolic Gospel Mission, where Jesus gives men
                beauty for ashes. By establishing His kingdom, power and glory
                in your life, keeping you in the Light and teaching you how to
                walk in Light. AGM is a church of God and therefore under the
                leadership of the Holy Spirit. The Holy Spirit through His
                wisdom has made Prophet Kevin and Rev. Karen Overseers of AGM.
                For questions, prayer requests, invitations or testimonies feel
                free to contact us.
              </p>
              <div className="btn-container">
                <Link to="about/agm" className="btn btn-white">
                  Learn More
                </Link>
                <Link to="contact/prayerrequests" className="btn">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <img src={tower} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- =======featured content========== --> */}
      <section id="featured-content">
        <div className="container">
          <h2 className="header">Featured Content</h2>
          <p>
            Gain spiritual insight and inspiration the collection of articles
            written down by Prophet through the inspiration of the Holy Spirit
          </p>
          <h3>Q & A</h3>
          <Content data={data.questions} />
          <h3>Visions</h3>
          <Content data={data.visions} />
          <h3>Counsels</h3>
          <Content data={data.counsels} />
          <Link to="ministry/articles" className="link">
            See more contents
          </Link>
        </div>
      </section>

      {/* <!-- ========= testimonies ========== --> */}
      <section id="testimonies">
        <div className="container">
          <h2 className="header">Testimonies</h2>
          <div className="testimony-container">
            <div className="testimony-box">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg"
                  alt=""
                />
                <div className="title">
                  <p className="name">Sarah Maine</p>
                  <span className="country text-muted">Kenya</span>
                </div>
              </div>
              <div className="testimony-content">
                In Kenya, Sarah, a faithful member of our church, experienced a
                miraculous healing. After prayers, her chronic illness vanished,
                leaving doctors amazed. This powerful testimony has inspired our
                church community and ignited faith in God's healing power.
              </div>
            </div>
            <div className="testimony-box">
              <div>
                <img
                  src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
                  alt=""
                />
                <div className="title">
                  <p className="name">Mark Frenchy</p>
                  <span className="country text-muted">Gabon</span>
                </div>
              </div>
              <div className="testimony-content">
                In our church, we witnessed a remarkable financial favor. After
                prayer, Mark received an unexpected job offer with a significant
                salary increase, bringing relief and gratitude. This testimony
                inspires others to trust in God's provision and seek His favor.
                Glory to God for His faithfulness in providing abundantly.
              </div>
            </div>
          </div>
          <div className="btn-container">
            <Link to="contact/testimonies" className="btn btn-white">
              Register Your Testimony
            </Link>
            <Link to="ministry/testimonies" className="btn">
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- =================== featured products ================= --> */}
      <section id="featured-products">
        <div className="container">
          <h2 className="header">Featured Products</h2>
          <div className="product-container">
            <div className="product-box book-card">
              <img
                src="https://www.redemptionstore.church/cdn/shop/products/Good-Morning-Holy-Spirit_800x.png?v=1583535433"
                alt=""
              />
              <h3>
                <span>The Horn Of Favor</span> by Prophet Kevin N.
              </h3>
              <div>
                <p className="price">$10</p>
                <button className="btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======featured videos======= --> */}
      <section id="featured-videos">
        <div className="container">
          <h2 className="header">Featured Videos</h2>

          <div className="video-container">
            <div className="videos">
              {/* <!-- give .videos max-width and margin auto  --> */}
              <div className="video-card">
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wJ3O3kHZE0c?si=zvCKQt4YJUifuxCe"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  THE WORD OF HIS POWER By Prophet Kevin N.
                </h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <Link to="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </Link>
                  <Link to="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </Link>
                </div>
              </div>
              <div className="video-card">
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MLo-hZPMGdg?si=wNNuPMluMrjE8NBE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="video-title">
                  STANDING COMPLETE IN ALL THE WILL OF GOD By Prophet Kevin N.
                </h3>
                <p className="share">
                  Help Us Reach More People By Sharing This Video To Others.
                </p>
                <div className="video-btns">
                  <Link to="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </Link>
                  <Link to="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </Link>
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
                  <Link to="facebook.com/prophetkevinonline" className="btn fb">
                    <i className="bx bxl-facebook"></i>
                    <p>Share On Facebook</p>
                  </Link>
                  <Link to="youtube.com/prophetkevinonline" className="btn yt">
                    <i className="bx bxl-youtube"></i>
                    <p>Subscribe</p>
                  </Link>
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
export default Home;
