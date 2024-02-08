import { Outlet } from 'react-router-dom'
import UseScrollTop from '../../common/components/UseScrollTop';
import Faqs from '../contact/component/Faqs';

const faqs = [
  {
    "question": "sample partner questions",
    "answer": "sample partner answer"
  },
  {
    "question": "sample partner questions",
    "answer": "sample partner answer"
  },
  {
    "question": "sample partner questions",
    "answer": "sample partner answer"
  },
  {
    "question": "sample partner questions",
    "answer": "sample partner answer"
  },
  {
    "question": "sample partner questions",
    "answer": "sample partner answer"
  }
]

const PartnerLayout = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>
          {/* <!-- hero section --> */}
    <section className="hero-bg partner">
      <div className="container">
        <h1>Partner with Us</h1>
        <p>"Two are better than one"</p>
      </div>
    </section>


{/* Outlet Starts here */}
<Outlet />
{/* Outlet ends here */}


{/* <!-- payment methods --> */}
    <section id="payment-methods">
      <div className="container">
        <h2>Acceptable Payment Methods</h2>
        <div className="payment-boxes">
          <div className="payment-box">
            <img
              src="https://media.licdn.com/dms/image/D4E12AQE8uOMdl4km9w/article-cover_image-shrink_600_2000/0/1678624190074?e=2147483647&v=beta&t=YEhO6rD75nuvHIg9za08JHadmzcjOyl-xBdtim_UnU4"
              alt=""
            />
            <p>675-345-345 <br />Name here</p>
          </div>
          <div className="payment-box">
            <img
              src="https://img1.wsimg.com/isteam/ip/62afe4f1-673c-43de-8e7f-5624bd5cc75b/Color-Paypal-Logo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,cg:true"
              alt=""
            />
            <span>exampleemail@user.com</span>
          </div>
          <div className="payment-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/1200px-Square_Cash_app_logo.svg.png"
              alt=""
            />
            <span>exampleemail@user.com</span>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Contact-box --> */}
    <section id="Contact-box">
      <div className="container contact-container">
        <img src="" alt="" />
        <div className="text">
          <h3>For Inquiries or partnership, you can call us via</h3>

          <p>237-456-697-574 | 235-576-345-786</p>
          <p>info@agm-online.org</p>
          <a href="" className="btn">Contact Us</a>
        </div>
      </div>
    </section>

    {/* <!-- ==== ========= faqs section ========== ==== --> */}
    <Faqs data={faqs}/>

    </>
  )
}

export default PartnerLayout
