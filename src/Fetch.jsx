import React, {useState} from 'react'

const Fetch = () => {
    const [data, setData] = useState(null)
        fetch(
            'https://raw.githubusercontent.com/JIM440/AGM-Website-React/main/src/assets/Json/data.json'
          )
            .then((res) => res.json())
            .then((articles) => setData(articles));
  return (
    <div className="content-container container">
      {data ? data[0].data.articles.visions.map((article, index) => (
        <div className="content-box">
        <img
          src="https://media.swncdn.com/cms/BST/29983-cain-slaying-abel-jacopo-palma-1590.800w.tn.jpg"
          alt=""
        />
        <div className="text">
          <h3>{article.title}</h3>
          <div>
            <a href="articles/id">
              <p>Read More</p>
              <i className="bx bxs-right-arrow-circle"></i>
            </a>
            <span>
              <i className="bi bi-clock-fill"></i>
              <span>{article.data}</span>
            </span>
          </div>
        </div>
        </div>
      )) : <p>Loading ......</p> }


</div>
  )
}

export default Fetch