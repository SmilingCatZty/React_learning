import React from 'react'
import { Descriptions } from 'antd'

 const News = () => {
  return (
    <div>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="UserName">Zhou Tianyang</Descriptions.Item>
        <Descriptions.Item label="Telephone">15569108988</Descriptions.Item>
        <Descriptions.Item label="Live">Shanghai</Descriptions.Item>
        <Descriptions.Item label="Remark">React 新版 和 老版 简直就是两个东西,见鬼了</Descriptions.Item>
      </Descriptions>
    </div>
  )
}
export default News