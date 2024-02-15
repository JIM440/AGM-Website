import Banner from '../../../common/Banner';
import UseScrollTop from '../../../common/components/UseScrollTop';
import { useState } from 'react';
import FetchArticles from '../../../common/Data/FetchArticles';
import Content from '../../../common/components/Content';

const Articles = () => {
  const scrollToTop = UseScrollTop();
  const [data, setData] = useState([]);

  FetchArticles().then((data) => {
    setData(data[0].data.articles);
  });

  return (
    <>
      <Banner
        text='"Q&A, Visions, Counsels, and Prophetic Revelations"'
        classname="articles"
        title="articles"
      />

      <section id="featured-content">
        <div className="container">
          <h3>Q & A</h3>
          <Content data={data.questions} />
          <h3>Visions</h3>
          <Content data={data.visions} />
          <h3>Counsels</h3>
          <Content data={data.counsels} />
          <h3>Prophetic Revelations</h3>
          <Content data={data.prophetic_revelations} />
        </div>
      </section>
    </>
  );
};

export default Articles;
