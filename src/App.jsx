import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Agreement from './pages/Agreement'
import Support from './pages/Support'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Minecraft from './pages/Minecraft'
import Chatgpt from './pages/Chatgpt'
import Spotify from './pages/Spotify'
import Vpn from './pages/Vpn'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/agreement' element={<Agreement />} />
        <Route path='/support' element={<Support />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/minecraft' element={<Minecraft />} />
        <Route path='/chatgpt' element={<Chatgpt />} />
        <Route path='/spotify' element={<Spotify />} />
        <Route path='/vpn' element={<Vpn />} />
      </Routes>
    </>
  )
}

export default App