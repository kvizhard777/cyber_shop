import React from 'react'

const SmallCardBtn = ({ img, text }) => {
  return (
    <button className="small-card__btn">
      <div className="small-card__btn-img">{img}</div>
      <span className="small-card__btn-text">{text}</span>
    </button>
  )
}

export default SmallCardBtn