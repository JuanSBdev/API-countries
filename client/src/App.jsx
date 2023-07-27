import { useEffect, useState } from 'react'
import {  Routes, Route, Link, useLocation } from 'react-router-dom';

import './App.css'

import React from 'react'
import NavBar from './components/Nav/NavBar'
import Cards from './components/Cards/Cards'
import Filtros from './components/Filters/Filtros'
import Start from '../views/Start/Start'
import Inicio from '../views/inicio/Inicio';
import Detail from '../views/Detail/Detail';

export default function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/countries' element={<Inicio/>}/>
        <Route path='/country/:id' element={<Detail/>}/>

      </Routes>
      
      
    </div>
  )
}


