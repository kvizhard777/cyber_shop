import React from 'react'
import './BuyMenu.css'
import MainButton from '../UI/MainButton/MainButton'

import { FiX, FiShoppingCart } from "react-icons/fi"

const BuyMenu = ({ close, selectedProduct }) => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__header">
          <button className="popup__close" onClick={close}>
            <FiX />
          </button>
        </div>

        {
          selectedProduct && (
            <div className="popup__content">
              <img src={selectedProduct.img} alt={selectedProduct.title} className='popup__content-img' />

              <div className="popup__content-texts">
                <h2 className='popup__content-title'>{selectedProduct.title}</h2>
                <p className='popup__content-desc'>{selectedProduct.description}</p>
                <span className="popup__content-price">{selectedProduct.price}₽</span>
              </div>

              <MainButton text='Купить' image={<FiShoppingCart />} />
            </div>
          )
        }
      </div>

      <div className="popup__overlay"></div>
    </div>
  )
}

export default BuyMenu