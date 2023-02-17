import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import MyNavlink from '../../../component/MyNavlink'

const Message = () => {
  const msgArr = [
    { id: 0, title: '消息1' },
    { id: 1, title: '消息2' },
    { id: 2, title: '消息3' }
  ]

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