import React, { useEffect, useState } from 'react'
import './Header.css'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderCategories from './HeaderCategories'
import BurgerIcon from '../BurgerMenu/BurgerIcon'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

import { FiMenu } from "react-icons/fi"

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleBurgerIconClick = () => setIsBurgerMenuOpen(!isBurgerMenuOpen)
  const handleCloseBurgerMenu = () => setIsBurgerMenuOpen(false)

  return (
    <header className="header">
      <div className="container">

        <div className="header__inner">
          <div className="header__section">
            <HeaderLogo link='/' />

            {windowWidth <= 1110
              ? (<BurgerIcon image={<FiMenu />} onClick={handleBurgerIconClick} />)
              : (<HeaderNav />)
            }
          </div>

          <div className="line"></div>

          <div className="header__section">
            <HeaderCategories />
          </div>
        </div>

        {isBurgerMenuOpen && <BurgerMenu onClose={handleCloseBurgerMenu} />}

      </div>
    </header>
  )
}

export default Header