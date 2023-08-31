import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = ({ text, to }) => {
  return (
    <li className="nav__item">
      <Link to={to}>
        <span className="nav__link">{text}</span>
      </Link>
    </li>
  )
}

export default HeaderItem