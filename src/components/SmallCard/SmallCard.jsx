import React from 'react'
import './SmallCard.css'
import MainButton from '../UI/MainButton/MainButton'

const SmallCard = ({ img, alt, title, subtitle, price, btnImg, btnText }) => {
  return (
    <div className="small-card">
      <img src={img} alt={alt} className="small-card__img" />

      <div className="small-card__wrapper">
        <div className="small-card__texts">
          <span className="small-card__title">{title}</span>
          <p className="small-card__subtitle">{subtitle}</p>
        </div>

        <div className="small-card__bottom">
          <span className="small-card__price">{price}₽</span>
          <MainButton image={btnImg} text={btnText} />
        </div>
      </div>
      
    </div>
  )
}

export default SmallCard