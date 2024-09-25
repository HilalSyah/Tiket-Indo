import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'
import Pages2 from './Pages2'

export const NavPage = () => {
  return (
    <div className="NavPage bg-page1 bg-cover bg-no-repeat">
        <Navbar/>,
        <Page1/>,
    </div>
  )
}

export default NavPage