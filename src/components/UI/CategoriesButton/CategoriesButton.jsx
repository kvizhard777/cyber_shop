import React from 'react'
import cl from './CategoriesButton.module.css'
import { Link } from 'react-router-dom'

const CategoriesButton = ({ to, image, text }) => {
  return (
    <Link to={to}>
      <button className={cl.btn}>
        <div className={cl.btn__img}>{image}</div>
        {text}
      </button>
    </Link>
  )
}

export default CategoriesButton