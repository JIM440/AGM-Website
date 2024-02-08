const SideNews = () => {
  return (
      <>
                <div className="side-news">
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://www.dioceseoflaredo.org/sites/default/files/images/Technology/cross-sunset-humility-devotion-161089-e1505933053195.jpeg" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Receive Christ</h3>
                <p>
                  Experience the love of Christ and it's transforming power that brings hope and eternal joy to your life.
                </p>
                <a href="salvation" className="btn">Receive Christ</a>
              </div>
            </div>
            <div className="side-news-card">
              <div className="side-news-image">
                <img src="https://images.squarespace-cdn.com/content/v1/5a1d221bbce17620f86369aa/1656545664935-BKIQSX7ETWBB0Y4E58Y6/PartnerGiving.jpg?format=1500w" alt="" />
              </div>
              <div className="side-news-text">
                <h3>Become a partner</h3>
                <p>
                  Help us reach more people by partnering with us. Join us in sharing the life-transforming message of hope and salvation.
                </p>
                <a href="contact/partner" className="btn">Become a partner</a>
              </div>
            </div>
          </div>
      </>
  )
}

export default SideNews
