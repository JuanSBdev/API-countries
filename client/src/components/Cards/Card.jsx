import React from 'react'

export default function Card(props) {
  let imgFlag = props.flag
  console.log(imgFlag)
  return (
    <div>
        <h1>{props.name}</h1>
        <img src={imgFlag} alt="flag" />
    </div>
  )
}
