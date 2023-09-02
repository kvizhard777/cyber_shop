import React from 'react'

const SmallCardBtn = ({ img, text, onClick }) => {
  return (
    <button className="small-card__btn" onClick={onClick}>
      <div className="small-card__btn-img">{img}</div>
      <span className="small-card__btn-text">{text}</span>
    </button>
  )
}

export default SmallCardBtn