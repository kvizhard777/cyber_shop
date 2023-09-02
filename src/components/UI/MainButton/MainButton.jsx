import React from 'react'
import cl from './MainButton.module.css'

const MainButton = ({ image, text, onClick }) => {
  return (
    <button className={cl.btn} onClick={onClick}>
      <div className={cl.btn__img}>{image}</div>
      {text}
    </button>
  )
}

export default MainButton