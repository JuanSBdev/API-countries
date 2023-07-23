import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import NavBar from './components/Nav/NavBar'
import Cards from './components/Cards/Cards'
import { getCountries } from './redux/actions'
import { useDispatch } from 'react-redux'

export default function App() {
  let dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getCountries())
    console.log('semanda')
  }, [])

  return (
    <div>
      <NavBar></NavBar>
      <Cards/>
    </div>
  )
}


