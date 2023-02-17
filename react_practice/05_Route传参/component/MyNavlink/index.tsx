import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavlink = (props: any) => {
  return (
    <NavLink className="myNavlink" {...props} />
  )
}

export default MyNavlink