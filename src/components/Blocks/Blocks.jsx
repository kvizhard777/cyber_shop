import React from 'react'
import './Blocks.css'
import LoadingText from '../LoadingText/LoadingText'
import BigCard from '../BigCard/BigCard'
import useFetch from '../../hooks/useFetch'

import { FiShoppingCart } from "react-icons/fi";

const Blocks = ({ ctg }) => {
  const category = ctg
  const {data: products, isLoading} = useFetch('https://64edb78c1f8721827141a268.mockapi.io/products', category)

  return (
    <section className="blocks">
      <div className="blocks__wrapper">
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