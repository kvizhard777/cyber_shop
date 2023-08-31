import React from 'react'
import { Link } from 'react-router-dom'

const FooterItem = ({ to, text }) => {
  return (
    <li className="footer__item">
      <Link to={to}>
        <span className="footer__link">{text}</span>
      </Link>
    </li>
  )
}

export default FooterItem