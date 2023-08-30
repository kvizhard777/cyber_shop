import React from 'react'
import './MainBlock.css'

import Leaders from '../Leaders/Leaders'
import Products from '../Products/Products'

const MainBlock = () => {
  return (
    <main className="main">
      <Leaders />
      <Products />
    </main>
  )
}

export default MainBlock