import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AgreementBlock from '../components/AgreementBlock/AgreementBlock'

const Agreement = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main">
        <div className="container">
          <AgreementBlock />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Agreement