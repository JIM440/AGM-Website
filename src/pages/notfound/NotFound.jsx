import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    // <!-- ==== not found ==== -->
    <section id="notFound">
      <div class="container">
        <h1>404</h1>
        <p>Sorry 😥 , can't find this page</p>
        <p><span>Return to </span><Link to="/">Home Page</Link></p>
      </div>
    </section>
  )
}

export default NotFound
