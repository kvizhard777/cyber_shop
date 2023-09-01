import React from 'react'
import CategoriesButton from '../UI/CategoriesButton/CategoriesButton'

const HeaderCategoriesItem = ({ img, text, to }) => {
  return (
    <li className='categories__item'>
      <CategoriesButton image={img} text={text} to={to} />
    </li>
  )
}

export default HeaderCategoriesItem