import React from 'react'
import './BigCard.css'
import MainButton from '../UI/MainButton/MainButton'

const BigCard = ({ img, alt, title, subtitle, price, btnText, btnImg }) => {
  return (
    <div className="big-card">
      <div className="big-card__img">
        <img src={img} alt={alt} />
      </div>

      <div className="big-card__wrapper">
        <div className="big-card__texts">
          <h3 className="big-card__title">{title}</h3>
          <p className="big-card__subtitle">{subtitle}</p>
        </div>

        <div className="big-card__bottom">
          <div className="big-card__price">Цена: {price}₽</div>
          <MainButton image={btnImg} text={btnText} />
        </div>
      </div>
    </div>
  )
}

export default BigCard