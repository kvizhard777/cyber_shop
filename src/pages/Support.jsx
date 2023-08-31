import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SupportBlock from '../components/SupportBlock/SupportBlock'

const Support = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main">
        <div className="container">
          <SupportBlock />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Support