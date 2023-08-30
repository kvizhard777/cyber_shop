import React from 'react'

const BannersImg = ({ img, alt }) => {
  return (
    <div className="banners__img">
      <img src={img} alt={alt} className="banners__img-image" />
    </div>
  )
}

export default BannersImg