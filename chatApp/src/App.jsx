import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </>
  )
}

export default App