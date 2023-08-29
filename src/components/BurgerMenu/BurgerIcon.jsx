import React from 'react'
import './BurgerMenu.css'

const BurgerIcon = ({ image, onClick }) => {
  return (
    <button className='burger-btn' onClick={onClick}>
      <div className="burger-btn-icon">{image}</div>
    </button>
  )
}

export default BurgerIcon