import React from 'react'
import './MainBlock.css'

import Leaders from '../Leaders/Leaders'
import Products from '../Products/Products'
import Banners from '../Banners/Banners'

const MainBlock = () => {
  return (
    <main className="main">
      <Banners />
      <Leaders />
      <Products />
    </main>
  )
}

export default MainBlock