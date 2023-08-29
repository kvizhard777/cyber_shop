import React from 'react'
import './BurgerMenu.css'

import HeaderLogo from '../Header/HeaderLogo'
import BurgerIcon from './BurgerIcon'
import HeaderNav from '../Header/HeaderNav'

import { FiX } from "react-icons/fi"

const BurgerMenu = ({ onClose }) => {
  return (
    <div className="burger">
      <div className="burger__header">
        <HeaderLogo link='/' />
        <BurgerIcon image={<FiX />} onClick={onClose} />
      </div>

      <div className="burger__main">
        <HeaderNav />
      </div>
    </div>
  )
}

export default BurgerMenu