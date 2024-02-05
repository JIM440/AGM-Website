import React from 'react'
import { Outlet } from 'react-router-dom'
import AboutHero from '../../common/AboutHero'

const About = () => {
  return (
    <>
              {/* <!-- hero section --> */}
<AboutHero />
      <Outlet />
    </>
  )
}

export default About
