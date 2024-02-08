import Banner from '../../../common/Banner';
import UseScrollTop from '../../../common/components/UseScrollTop';
import articles from '../../../assets/images/header-images/articles.jpeg'

const Articles = () => {
  const scrollToTop = UseScrollTop();

  return (
    <>
        <Banner text='"Q&A, Visions, Counsels, and Prophetic Revelations"' classname='articles' title='articles'/>

    <section id="featured-content">
      <div className="container">
        <h3>Q & A</h3>
        <div className="content-container">
          <div className="content-box">
            <img
              src={articles}
              alt=""
            />
            <div className="text">
              <h3>Who did Cain marry?</h3>
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
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="text">
              <h3>Is football godly or evil?</h3>
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
          <a href="../contact/questions.html">Ask Prophet Kevin a Question</a>
        </div>
        <h3>Visions</h3>
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

export default Articles
