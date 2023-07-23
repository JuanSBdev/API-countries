import React from 'react'

export default function Card(props) {
  let imgFlag = props.flag
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.capital}</h2>
        <img src={imgFlag} alt="flag" />
        <p>{props.subregion}</p>
        <p>{props.area}</p>
        <p>{props.population}</p>
    </div>
  )
}
