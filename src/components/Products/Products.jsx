import React, { useEffect, useState } from 'react'
import './Products.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import BigCard from '../BigCard/BigCard'

import { FiShoppingCart } from "react-icons/fi";
import LoadingText from '../LoadingText/LoadingText';

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://64edb78c1f8721827141a268.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section className="products">
      <div className="container">

        <div className="products__inner">
          <SectionTitle text="Все товары" />

          {isLoading
            ? (<LoadingText text="Идёт загрузка..." />)
            : (
                <div className="products__cards">
                  {
                    products.map((product) => (
                      <BigCard
                        key={product.id}
                        img={product.img}
                        price={product.price}
                        title={product.title}
                        subtitle={product.description}
                        btnImg={<FiShoppingCart />}
                        btnText="Купить"
                      />
                    ))
                  }
                </div>
              )
          }
        </div>

      </div>
    </section>
  )
}

export default Products