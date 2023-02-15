import React from 'react'
import './index.css';

export default function Item() {
  return (
    <div className='contain_item'>
      <li className='contain_list-li'>
        <label >
          <input type="checkbox" />
          <span>xxxxx</span>
        </label>
        <button className='btn btn_warn' style={{ position: 'absolute', right: 0 }}>删除</button>
      </li>
    </div>
  )
}
