import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contacts from '../components/Contacts/Contacts'

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="main">
        <div className="container">
          <Contacts />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact