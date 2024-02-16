import React, { useEffect, useState } from 'react';
import UseScrollTop from '../../../common/components/UseScrollTop';
import { useParams } from 'react-router-dom';
import FetchArticles from '../../../common/Data/FetchArticles';
import NotFound from '../../notfound/NotFound';
import DOMPurify from 'dompurify';

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [idExists, setIdExists] = useState(true);
  const scrollToTop = UseScrollTop();

  useEffect(() => {
    FetchArticles()
      .then((data) => {
        const articles = data[0].data.articles;
        const visions = Object.values(articles.visions || {});
        const questions = Object.values(articles.questions || {});
        const counsels = Object.values(articles.counsels || {});
        const prophetic_revelations = Object.values(
          articles.prophetic_revelations || {}
        );

        const articleData =
          visions.find((vision) => vision.id === parseInt(id)) ||
          questions.find((question) => question.id === parseInt(id)) ||
          counsels.find((counsel) => counsel.id === parseInt(id)) ||
          prophetic_revelations.find(
            (prophetic_revelation) => prophetic_revelation.id === parseInt(id)
          );
        if (articleData) {
          setData(articleData);
        } else {
          setIdExists(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  }, [id]);

  if (!idExists) {
    return <NotFound />;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <!-- hero section --> */}
      <section
        className="hero-bg"
        style={{
          backgroundImage: `url(${data ? data.picture : ''})`,
          height: '70vh',
        }}
      ></section>

      {/* <!-- article content --> */}
      {data ? (
        <section className="article-content-container mw-content">
          <div className="container">
            <div className="category-header">
              <h2 className="category-title">{data.title}</h2>
              <span>
                <i className="bi bi-clock-fill"></i>
                <span className="date"> 23-01-2023</span>
              </span>
            </div>
            <div
              className="category-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  `<p>${data.content
                    .replace(/\//g, '"')
                    .replace(/<br>/g, '<br />')}</p>`
                ),
              }}
            ></div>
          </div>
        </section>
      ) : (
        <p className="container">Loading data.....</p>
      )}

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
  );
};

export default Article;
