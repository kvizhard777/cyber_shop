import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLogo = ({ to }) => {
  return (
    <Link to={to}>
      <div className="logo">
        <span className='logo__title'>Cyber<span className="blue">Shop</span></span>
        <span className='logo__subtitle'>Магазин цифровых товаров</span>
      </div>
    </Link>
  )
}

export default HeaderLogo