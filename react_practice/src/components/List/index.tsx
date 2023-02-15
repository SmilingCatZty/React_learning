import React from 'react'
import Item from '../Item'
import './index.css'


export default function List() {
  return (
    <div className='contain_list'>
      <ul className='contain_list-ul'>
        <Item />
        <Item />
      </ul>
    </div>
  )
}
