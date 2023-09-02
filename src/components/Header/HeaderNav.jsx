import React from 'react'

import HeaderItem from './HeaderItem'
import MainButton from '../UI/MainButton/MainButton'

import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <HeaderItem to='/' text="Главная" />
        <HeaderItem to='/agreement' text="Соглашение" />
        <HeaderItem to='/support' text="Поддержка" />
        <HeaderItem to='/contact' text="Контакты" />
      </ul>

      <Link to='/products'>
        <MainButton text="Купить" image={<FiShoppingCart />} />
      </Link>
    </nav>
  )
}

export default HeaderNav