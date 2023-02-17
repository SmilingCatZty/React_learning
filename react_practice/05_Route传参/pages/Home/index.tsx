import React from 'react'
import { Button } from 'antd';
import MyNavlink from '../../component/MyNavlink/index'
import { Outlet } from 'react-router-dom';


export default function Home() {
  return (
    <div>
      <h3>Home</h3>
      <div>
        {/* news组件 */}
        <MyNavlink to="/home/news">
          <Button>news</Button>
        </MyNavlink>
        {/* message组件 */}
        <MyNavlink to="/home/message">
          <Button>message</Button>
        </MyNavlink>
      </div>

      <Outlet />
    </div>
  )
}
