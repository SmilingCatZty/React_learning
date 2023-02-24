import React from 'react'
import './App.module.css'
import Count from './container/Count/count' // 引入count容器
import Person from './container/Person/person' // 引入person容器
import Mix from './container/Mix/mix' // 引入mix容器

const App: React.FC = (props) => {
  return (
    <div className='App'>
      {/* 给容器组件传递store */}
      <Count />
      <hr />
      <hr />
      <Person />
      <hr />
      <Mix />
    </div>
  )
}
export default App
