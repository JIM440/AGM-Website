import React from 'react'
import { Outlet } from 'react-router-dom'

const PartnerLayout = () => {
  return (
    <>
          {/* <!-- hero section --> */}
    <section class="hero-bg partner">
      <div class="container">
        <h1>Partner with Us</h1>
        <p>"Two are better than one"</p>
      </div>
    </section>


{/* Outlet Starts here */}
<Outlet />
{/* Outlet ends here */}


{/* <!-- payment methods --> */}
    <section id="payment-methods">
      <div class="container">
        <h2>Acceptable Payment Methods</h2>
        <div class="payment-boxes">
          <div class="payment-box">
            <img
              src="https://media.licdn.com/dms/image/D4E12AQE8uOMdl4km9w/article-cover_image-shrink_600_2000/0/1678624190074?e=2147483647&v=beta&t=YEhO6rD75nuvHIg9za08JHadmzcjOyl-xBdtim_UnU4"
              alt=""
            />
            <p>675-345-345 <br />Name here</p>
          </div>
          <div class="payment-box">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png"
              alt=""
            />
            <span>exampleemail@user.com</span>
          </div>
          <div class="payment-box">
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
      <div class="container contact-container">
        <img src="" alt="" />
        <div class="text">
          <h3>For Inquiries or partnership, you can call us via</h3>

          <p>237-456-697-574 | 235-576-345-786</p>
          <p>info@agm-online.org</p>
          <a href="" class="btn">Contact Us</a>
        </div>
      </div>
    </section>

    {/* <!-- ==== ========= faqs section ========== ==== --> */}
    <section id="faqs-section">
      <div class="container container-faqs-section">
        <h2 class="header">Frequently Asked Questions</h2>
        <div class="faqs-container">
          <div class="faqs">
            <div class="question">
              <h3>Who are we?</h3>
              <i class="bi bi-chevron-down"></i>
            </div>
            <p class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div class="faqs">
            <div class="question">
              <h3>How can I give to AGM?</h3>
              <i class="bi bi-chevron-down"></i>
            </div>
            <p class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div class="faqs">
            <div class="question">
              <h3>How can I become a partner?</h3>
              <i class="bi bi-chevron-down"></i>
            </div>
            <p class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
          <div class="faqs">
            <div class="question">
              <h3>How can I get help?</h3>
              <i class="bi bi-chevron-down"></i>
            </div>
            <p class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempora veniam laboriosam pariatur fugiat magnam odit hic, quam
              voluptas suscipit?
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default PartnerLayout
