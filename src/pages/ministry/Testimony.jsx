import { Link } from 'react-router-dom';
import Banner from '../../common/Banner';
import UseScrollTop from '../../common/components/UseScrollTop';

const Testimonies = () => {
  const scrollToTop = UseScrollTop();


  return (
    <>
      {/* <!-- hero section --> */}
      <Banner
        title="Testimonies"
        text='"When we testify, God is Glorified"'
        classname="testimonies"
      />

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
          </div>
          <div className="btn-container">
            <Link to="/contact/testimonies" className="btn btn-white">
              Add Your Testimony
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
