import React, { useState } from 'react'
import './Blocks.css'

import LoadingText from '../LoadingText/LoadingText'
import BigCard from '../BigCard/BigCard'
import useFetch from '../../hooks/useFetch'
import BuyMenu from '../BuyMenu/BuyMenu'

import { FiShoppingCart } from "react-icons/fi"

const Blocks = ({ ctg }) => {
  const category = ctg
  const {data: products, isLoading} = useFetch('https://64edb78c1f8721827141a268.mockapi.io/products', category)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="blocks">
      <div className="blocks__wrapper">
        {isPopupOpen
          ? (<BuyMenu selectedProduct={selectedProduct} close={() => setIsPopupOpen(false)} />)
          : ''
        }

        {
          isLoading
            ? (<LoadingText text='Идёт загрузка...' />)
            : (
              <div className='blocks__cards'>
                {products.map(product => (
                  <BigCard
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    subtitle={product.description}
                    key={product.id}
                    btnText='Купить'
                    btnImg={<FiShoppingCart />}
                    onClick={() => {
                      setSelectedProduct(product)
                      setIsPopupOpen(true)
                    }}
                  />
                ))}
              </div>
            )
        }
      </div>
    </section>
  )
}

export default Blocks