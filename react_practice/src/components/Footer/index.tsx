import React from 'react'
import './index.css';

export default function Footer() {
  return (
    <div className='contain_footer'>
      <div>
        <label >
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span>全部2
        </span>
      </div>
      <div>
        <button className='btn btn_warn'>清除已完成的任务</button>
      </div>
    </div>
  )
}
