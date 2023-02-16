import React from 'react'
import './index.css';

interface PropTypes {
  handleList: Function
}

 const Header:React.FC<PropTypes> = (props: any)=> {
  const { handleList } = props
  function handleKeyUp(e: any) {
    if (e.keyCode === 13) {
      handleList(e.target.value)
    } else return
    if (e.target.value === '') {
      alert('输入不能为空')
    }
  }

  return (
    <div className='contain_header'>
      <input className='contain_header-input' type="text" placeholder='输入你的任务名称,按下回车确认' onKeyDown={handleKeyUp} />
    </div>
  )
 }
export default Header
