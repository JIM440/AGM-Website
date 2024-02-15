import React from 'react';
import { Link } from 'react-router-dom';

const Content = ({ data }) => {
  return (
    <div className="content-container">
      {data ? (
        data.map((article, index) => (
          <div className="content-box" key={index}>
            <img src={article.picture} alt="" />
            <div className="text">
              <h3>{article.headerText}</h3>
              <div>
                <Link to="articles/id">
                  <p>Read More</p>
                  <i className="bx bxs-right-arrow-circle"></i>
                </Link>
                <span>
                  <i className="bi bi-clock-fill"></i>
                  <span>{article.date}</span>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="container">Data is Loading ......</p>
      )}
    </div>
  );
};

export default Content;
