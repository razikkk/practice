import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from '../src/components/user'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    {/* <Routes>
      
    <Route path='/' element={<User/>}/>
    </Routes> */}
    <User/>
    </>
  )
}

export default App
