import React from 'react'
import cl from './MainButton.module.css'

const MainButton = ({ image, text }) => {
  return (
    <button className={cl.btn}>
      <div className={cl.btn__img}>{image}</div>
      {text}
    </button>
  )
}

export default MainButton