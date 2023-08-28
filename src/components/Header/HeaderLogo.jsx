import React from 'react'

const HeaderLogo = ({ link }) => {
  return (
    <a href={link}>
      <div className="logo">
        <span className='logo__title'>Cyber<span className="blue">Shop</span></span>
        <span className='logo__subtitle'>Магазин цифровых товаров</span>
      </div>
    </a>
  )
}

export default HeaderLogo