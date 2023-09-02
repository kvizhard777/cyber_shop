import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'

const Purchase = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main">
        <div className="container">
          <Products />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Purchase