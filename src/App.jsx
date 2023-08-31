import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Agreement from './pages/Agreement'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/agreement' element={<Agreement />} />
        <Route path='/support' element={<Support />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App