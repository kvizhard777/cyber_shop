import React from 'react'
import Footer from '../components/Footer/Footer'
import CartBlock from '../components/CartBlock/CartBlock'
import Header from '../components/Header/Header'

const Cart = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main">
        <div className="container">
          <CartBlock />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart