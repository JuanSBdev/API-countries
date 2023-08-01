import React from 'react'
import Activities from '../src/components/activities/Activities'
import { Link } from 'react-router-dom'

export default function ActivityView() {
  return (
    <div>
        <Activities/>
        <Link to={'/activity/form'}> ADD ACTIVITY</Link>
    </div>
  )
}
