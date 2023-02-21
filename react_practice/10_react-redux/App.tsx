import React from 'react'
import './App.module.css'
import Count from './container/Count/count'
// 引入store
import store from './redux/store'

const App: React.FC = (props) => {
  return (
    <div className='App'>
      {/* 给容器组件传递store */}
      <Count store={store}/>
    </div>
  )
}
export default App
