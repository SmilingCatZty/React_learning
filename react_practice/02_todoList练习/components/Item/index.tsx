import React, { useState } from 'react'
import './index.css';

export default function Item(props: any) {
  let [mouse, setMouse]: any = useState(false)

  // 鼠标检查
  function handleMouse(status: boolean) {
    setMouse(() => status)
  }

  // 勾选检查
  const handleCheck = (e: any) => {
    props.handleItem(props.id, e.target.checked)
  }

  // 删除
  const handleDelete = (id: any) => {
    if (window.confirm('确认删除吗？')) {
      props.deleteItem(id)
    }
  }

  return (
    <div className='contain_item'>
      <li className='contain_list-li' onMouseLeave={() => handleMouse(false)} onMouseEnter={() => handleMouse(true)}>
        <label >
          <input type="checkbox" checked={props.done} onChange={handleCheck} />
          <span>{props.name}</span>
        </label>
        <button className='btn btn_warn' onClick={() => handleDelete(props.id)} style={{ position: 'absolute', right: 0, display: mouse ? 'inline-block' : 'none' }}>删除</button>
      </li>
    </div>
  )
}
