import React from 'react'
import './index.css';

interface FooterTypes {
  todos: object
  handleChecked: Function
  clearAllDone: Function
}

const Footer: React.FC<FooterTypes> = (props: any) => {
  const { todos, handleChecked, clearAllDone } = props
  // 已完成的数量
  const doneCount: number = todos.reduce((pre: any, cur: any) => {
    return pre + (cur.done ? 1 : 0)
  }, 0)
  const total: number = todos.length // 总数

  const footerChange = (e: any) => {
    handleChecked(e.target.checked)
  }

  const clearAllTask = () => {
    clearAllDone()
  }

  return (
    <div className='contain_footer'>
      <div>
        <label >
          <input type="checkbox" checked={doneCount === total && total !== 0} onChange={footerChange} />
        </label>
        <span>
          <span>已完成{doneCount}</span>全部{total}
        </span>
      </div>
      <div>
        <button className='btn btn_warn' onClick={clearAllTask}>清除已完成的任务</button>
      </div>
    </div>
  )
}
export default Footer