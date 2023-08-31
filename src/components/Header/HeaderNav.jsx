import React from 'react'

import HeaderItem from './HeaderItem'
import MainButton from '../UI/MainButton/MainButton'

import { FiShoppingCart } from "react-icons/fi";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <HeaderItem to='/' text="Главная" />
        <HeaderItem to='/agreement' text="Соглашение" />
        <HeaderItem to='/support' text="Поддержка" />
        <HeaderItem to='/contact' text="Контакты" />
      </ul>

      <MainButton text="Корзина" image={<FiShoppingCart />} />
    </nav>
  )
}

export default HeaderNav