import React from 'react'
import Header from '../components/Header/Header'
import Blocks from '../components/Blocks/Blocks'
import Footer from '../components/Footer/Footer'

const Chatgpt = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="container">
          <Blocks ctg={2} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Chatgpt