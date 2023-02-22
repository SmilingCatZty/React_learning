import React from 'react'
import './App.module.css'
import Count from './container/Count/count'
import Person from './container/Person/person'
import Mix from './container/Mix/mix'

const App: React.FC = (props) => {
  return (
    <div className='App'>
      {/* 给容器组件传递store */}
      <Count />
      <hr />
      <Person />
      <hr />
      <Mix />
    </div>
  )
}
export default App
