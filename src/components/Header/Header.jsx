import React from 'react'
import './Header.css'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderCategories from './HeaderCategories'

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        <div className="header__inner">
          <div className="header__section">
            <HeaderLogo link='/' />
            <HeaderNav />
          </div>

          <div className="line"></div>

          <div className="header__section">
            <HeaderCategories />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header