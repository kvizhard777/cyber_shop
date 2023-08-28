import React from 'react'

const HeaderItem = ({ link, text }) => {
  return (
    <li className="nav__item"><a href={link} className="nav__link">{text}</a></li>
  )
}

export default HeaderItem