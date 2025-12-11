import React from 'react'
import Demo from './Demo'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    </Navbar>
    <Routes>
      <Route path="/" element={<Demo />} />
    </Routes>
  )
}

export default App
