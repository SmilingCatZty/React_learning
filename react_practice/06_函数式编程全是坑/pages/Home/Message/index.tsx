import { Button } from 'antd'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
// import MyNavlink from '../../../component/MyNavlink'

const Message = () => {
  const msgArr = [
    { id: 0, title: '消息1' },
    { id: 1, title: '消息2' },
    { id: 2, title: '消息3' }
  ]

  const navigate = useNavigate()

  const handleView = () => {
    navigate('home/message/detail', { state: { id: 1 } })
  }

  return (
    <div>
      Here are some messages
      <ul>
        {
          msgArr.map((item) => {
            return (
              <li key={item.id}>
                {/* params传参 */}
                <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>
                <Button onClick={() => handleView()}>查看</Button>

                {/* search传参 */}
                {/* <Link to={`/home/message/detail?id=${item.id}`}>{item.title}</Link> */}

                {/* state传参 */}
                {/* <Link to={{ pathname: '/home/message/detail', state: { id: item.id } }}>{item.title}</Link> */}


              </li>
            )
          })
        }
        <hr />
        <Outlet />
      </ul>
    </div>
  )
}
export default Message