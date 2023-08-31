import React from 'react'
import './Footer.css'
import FooterItem from './FooterItem'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__inner">
          <div className="footer__texts">
            <span className="footer__text">CyberShop {currentYear}</span>
            <span className="footer__text">&copy; Все права защищены</span>
          </div>

          <ul className="footer__list">
            <FooterItem to='/agreement' text="Соглашение" />
            <FooterItem to='/contact' text="Связаться" />
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer