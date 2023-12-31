import React, { useEffect, useState } from 'react'
import './Leaders.css'

import { FiShoppingCart } from "react-icons/fi"

import SectionTitle from '../SectionTitle/SectionTitle'
import SmallCard from '../SmallCard/SmallCard'
import LoadingText from '../LoadingText/LoadingText'
import BuyMenu from '../BuyMenu/BuyMenu'

const Leaders = () => {
  const [leaders, setLeaders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    fetch('https://64edb78c1f8721827141a268.mockapi.io/leaders')
      .then(response => response.json())
      .then(data => setLeaders(data))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section className="leaders">
      <div className="container">

        <div className="leaders__inner">
          <SectionTitle text="🏆 Лидеры продаж" />

          {isPopupOpen
            ? (<BuyMenu selectedProduct={selectedProduct} close={() => setIsPopupOpen(false)} />)
            : ''
          }

          {isLoading
            ? (<LoadingText text="Идёт загрузка..." />)
            : (
                <div className="leaders__cards">
                  {leaders.map(product => (
                    <SmallCard 
                      key={product.id}
                      title={product.title}
                      subtitle={product.description}
                      img={product.img}
                      price={product.price}
                      btnImg={<FiShoppingCart />}
                      btnText="Купить"
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

      </div>
    </section>
  )
}

export default Leaders