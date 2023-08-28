import React from 'react'
import CategoriesButton from '../UI/CategoriesButton/CategoriesButton'

const HeaderCategoriesItem = ({ img, text, link }) => {
  return (
    <li className='categories__item'>
      <CategoriesButton image={img} text={text} link={link} />
    </li>
  )
}

export default HeaderCategoriesItem