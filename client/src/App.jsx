import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import NavBar from './components/Nav/NavBar'
import Cards from './components/Cards/Cards'

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <p>APP</p>
      <Cards/>
    </div>
  )
}


