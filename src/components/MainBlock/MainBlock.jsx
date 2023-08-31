import React from 'react'
import './MainBlock.css'

import Leaders from '../Leaders/Leaders'
import Products from '../Products/Products'
import Banners from '../Banners/Banners'
import Contacts from '../Contacts/Contacts'

const MainBlock = () => {
  return (
    <main className="main">
      <Banners />
      <Leaders />
      <Products />
      <Contacts />
    </main>
  )
}

export default MainBlock