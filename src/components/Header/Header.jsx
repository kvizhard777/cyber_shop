import React, { useState } from 'react'
import './Header.css'

import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderCategories from './HeaderCategories'
import BurgerIcon from '../BurgerMenu/BurgerIcon'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

import { FiMenu } from "react-icons/fi"
import useWindowWidth from '../../hooks/useWindowWidth'

const Header = () => {
  const windowWidth = useWindowWidth()
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const handleBurgerIconClick = () => setIsBurgerMenuOpen(!isBurgerMenuOpen)
  const handleCloseBurgerMenu = () => setIsBurgerMenuOpen(false)

  return (
    <header className="header">
      <div className="container">

        <div className="header__inner">
          <div className="header__section">
            <HeaderLogo to='/' />

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