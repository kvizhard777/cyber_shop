import React from 'react'

const FooterItem = ({ link, text }) => {
  return (
    <li className="footer__item"><a href={link} className="footer__link">{text}</a></li>
  )
}

export default FooterItem