import React from 'react'
import Banner from '../../common/Banner'
import UseScrollTop from '../../common/components/UseScrollTop';

const Article = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>

    {/* <!-- hero section --> */}
    <Banner text='' className='single-article' title=''/>

    {/* <!-- article content --> */}
    <section className="article-content-container mw-content">
      <div className="container">
        <div className="category-header">
          <h2 className="category-title">
            Vision: The Vision of The Lord Jesus and the 7 Lamp Stands
          </h2>
          <span>
            <i className="bi bi-clock-fill"></i
            ><span className="date"> 23-01-2023</span>
          </span>
        </div>
        <div className="category-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatum facere fugit laudantium est. Saepe quam cum error
            deleniti voluptate ullam ea eaque fugiat nulla similique
            exercitationem magnam enim, veritatis illum totam excepturi
            distinctio adipisci iure. Dolore ducimus quibusdam est amet quam
            consequuntur delectus provident, illum magni obcaecati maxime
            molestias voluptates ea recusandae mollitia veniam dicta nihil
            voluptatem temporibus cumque. Harum veniam dolorem, facilis commodi
            dicta magnam enim asperiores incidunt nostrum? Nemo deserunt eaque
            amet provident vel dolorum vero eos animi quis ipsam magnam, et
            possimus autem hic suscipit perspiciatis atque molestiae! Illo
            officiis delectus corrupti quis porro rerum magni quia voluptate
            mollitia, similique facilis fugit odio reprehenderit numquam
            voluptatibus eveniet exercitationem corporis, libero aut. Commodi,
            laborum rerum facilis voluptatibus quidem nemo doloremque sit
            accusantium obcaecati tempore aspernatur cumque? Doloremque sit
            perferendis ea illo quae fugit perspiciatis, veritatis nobis numquam
            repellat cumque vitae expedita iusto nisi dolore reiciendis alias
            molestiae rem. Fugit tenetur impedit quaerat dolore vel veniam
            adipisci nam quod dolorem nostrum aliquam iure quo ea, sequi amet
            nihil explicabo velit tempore earum iusto, delectus repellendus,
            nemo quidem quasi? Odio asperiores pariatur beatae alias corrupti!
            Et quo at perspiciatis eveniet rem, nisi reprehenderit provident
            laudantium? Quam eveniet voluptas nisi.
          </p>
        </div>
      </div>
    </section>

    {/* <!-- related articles --> */}
    <section id="related-content">
      <div className="container">
        <h2 className="header">Related Content</h2>
        <div className="content-container">
          <div className="content-box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQI5ARs0atJoYRaiwT6yPHbgoPPynNr37-7PyQrmGgXp1RsnUB7las58Ytx1nqiFLXFo&usqp=CAU"
              alt=""
            />
            <div className="text">
              <h3>Vision of the seven lamp stands.</h3>
              <div>
                <a href="./home/singlearticle.html">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
          <div className="content-box">
            <img
              src="https://media.istockphoto.com/id/1183916666/vector/red-dragon-head-digital-painting.jpg?s=612x612&w=0&k=20&c=dDu6vxNhL1zkXyXdLh0_AWqoysJPY43idokKFvknOaA="
              alt=""
            />
            <div className="text">
              <h3>Vision of the Dragon.</h3>
              <div>
                <a href="./home/singlearticle.html">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </a>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>23-12-2023</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Article
