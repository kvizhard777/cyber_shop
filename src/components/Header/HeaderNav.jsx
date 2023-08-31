import React from 'react'
import HeaderItem from './HeaderItem'
import MainButton from '../UI/MainButton/MainButton'

import { FiShoppingCart } from "react-icons/fi";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <HeaderItem link='#' text="Главная" />
        <HeaderItem link='#' text="Соглашение" />
        <HeaderItem link='#' text="Поддержка" />
        <HeaderItem link='#contacts' text="Контакты" />
      </ul>

      <MainButton text="Корзина" image={<FiShoppingCart />} />
    </nav>
  )
}

export default HeaderNav