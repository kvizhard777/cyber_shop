import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Blocks from '../components/Blocks/Blocks'

const Minecraft = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="container">
          <Blocks ctg={1} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Minecraft