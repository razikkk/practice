import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from '../src/components/user'
import Dashboard from './components/dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Routes>
      
    <Route path='/' element={<User/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
