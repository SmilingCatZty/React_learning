import React from 'react'
import './App.module.css'
import Count from './componets/count/index' // 引入count容器

const App: React.FC = (props) => {
  return (
    <div className='App'>
      {/* 给容器组件传递store */}
      <Count />
    </div>
  )
}
export default App
