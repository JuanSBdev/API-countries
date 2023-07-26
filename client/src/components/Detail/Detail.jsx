import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {

// hacerlo del front    
    let {id} = useParams()
    let URL = 'http://localhost:3001/country/'
    try {
        
        let data = axios(URL)
    } catch (error) {
        console.log(error)
    }
  return (
    <div>
        <h1>data.nombre</h1>
    </div>
  )
}
