import React from 'react'
import './index.css';

export default function Header() {
  return (
    <div className='contain_header'>
      <input className='contain_header-input' type="text" placeholder='输入你的任务名称,按下回车确认'/>
    </div>
  )
}
