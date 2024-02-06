import { Link } from 'react-router-dom'
import IntroImage from '../../assets/images/prophet-kevin/about-pk.jpg'
import Deliverance from '../../assets/images/prophet-kevin/salvation.jpg'
import Favour from '../../assets/images/prophet-kevin/teaching.jpg'
import Salvation from '../../assets/images/prophet-kevin/prayer.jpg'
import Prayer from '../../assets/images/prophet-kevin/about-pk.jpg'
import Healing from '../../assets/images/prophet-kevin/healing.jpg'
import UseScrollTop from '../../common/components/UseScrollTop'

const ProphetKevin = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>

{/* <!--=== intro section ===--> */}
    <section id="intro">
      <div className="container">
        <div className="about-cols even-columns">
          <div>        
            <h2 className="header">About Prophet Kevin</h2>
            <p>
              Prophet Kevin was born on September 3, 1988, in a serene town
              nestled in the countryside. Growing up, he developed a profound
              spiritual sensitivity and an innate ability to discern divine
              messages. Prophet Kevin's educational journey led him to attend
              Faith Academy, where he gained a strong biblical foundation
              alongside his academic pursuits. With a fervent passion for
              serving God and His people, Prophet Kevin embarked on a prophetic
              ministry, delivering powerful messages of hope, restoration, and
              spiritual insight to those seeking guidance. His anointed gifts
              and unwavering dedication have positioned him as a trusted vessel
              for God's profound revelations, making Prophet Kevin a
              transformative force in the lives of many.
            </p>
          </div>
          <div>
            <img src={IntroImage} alt="" />
          </div>
        </div>
      </div>
    </section>

          {/* <!-- ----------  Mandates ---------- --> */}
    <section id="mandates">
      <div className="container">
        <h2 className="header">Mandates</h2>
        <div className="mandate-container">
          <div className="mandate-box">
            <div className="mandate-img">
              <img
                src={Healing}
                alt=""
              />
            </div>
            <p className="mandate-name purple">Healing Mandate</p>
            <p className="mandate-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              assumenda natus velit minus laudantium eveniet qui sequi fugit
              ipsa dolores. Dolores quasi, veritatis quis at officia veniam
              autem optio corrupti?
            </p>
          </div>
          <div className="mandate-box">
            <div className="mandate-img">
              <img
                src={Prayer}
                alt=""
              />
            </div>
            <p className="mandate-name yellow">Prayer Mandate</p>
            <p className="mandate-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              assumenda natus velit minus laudantium eveniet qui sequi fugit
              ipsa dolores. Dolores quasi, veritatis quis at officia veniam
              autem optio corrupti?
            </p>
          </div>
          <div className="mandate-box">
            <div className="mandate-img">
              <img src={Favour} alt="" />
            </div>
            <p className="mandate-name blue">Favour Mandate</p>
            <p className="mandate-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              assumenda natus velit minus laudantium eveniet qui sequi fugit
              ipsa dolores. Dolores quasi, veritatis quis at officia veniam
              autem optio corrupti?
            </p>
          </div>
          <div className="mandate-box">
            <div className="mandate-img">
              <img
                src={Salvation}
                alt=""
              />
            </div>
            <p className="mandate-name red">Salvation Mandate</p>
            <p className="mandate-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              assumenda natus velit minus laudantium eveniet qui sequi fugit
              ipsa dolores. Dolores quasi, veritatis quis at officia veniam
              autem optio corrupti?
            </p>
          </div>
          <div className="mandate-box">
            <div className="mandate-img">
              <img
                src={Deliverance}
                alt=""
              />
            </div>
            <p className="mandate-name green">Deliverance Mandate</p>
            <p className="mandate-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              assumenda natus velit minus laudantium eveniet qui sequi fugit
              ipsa dolores. Dolores quasi, veritatis quis at officia veniam
              autem optio corrupti?
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* -----------  Invite   --------- */}
    <section id="invite">
      <div className="container">
        <div>
        <h3>Invite Prophet Kevin N.</h3>
        <p>Experience the transformative power of God's presence in your church by inviting Prophet Kevin N. to come and minister. Witness lives changed, the sick healed, and unlock the extraordinary move of God in your congregation</p>
        <Link to="/contact/invitation" className="btn">Invite Now</Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProphetKevin
