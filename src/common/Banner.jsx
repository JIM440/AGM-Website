import React from 'react'
// WILL CONTAIN HEADER WHICH HAS DATE
const Banner = ({title, classname, text}) => {
  return (
    <section className={`hero-bg ${classname}`}>
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
// WILL CONTAIN HEADER WHICH HAS DATE
export default Banner
