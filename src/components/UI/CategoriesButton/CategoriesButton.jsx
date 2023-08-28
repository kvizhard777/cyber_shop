import React from 'react'
import cl from './CategoriesButton.module.css'

const CategoriesButton = ({ link, image, text }) => {
  return (
    <a href={link}>
      <button className={cl.btn}>
        <div className={cl.btn__img}>{image}</div>
        {text}
      </button>
    </a>
  )
}

export default CategoriesButton