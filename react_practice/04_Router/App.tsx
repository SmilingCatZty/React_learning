import React from 'react'
import { Button } from 'antd';
import './App.css'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'



const App: React.FC = () => {
  return (
    <div className='App'>
      <div>
        <div className='list-title'>
          <h1>React Router Demo</h1>
        </div>
        <div className="list-group">
          {/* 在原生js中用<a></a>跳转 */}
          {/* <a className="list-group-item active" href="./about.html">About</a> */}
          {/* <a className="list-group-item" href="./home.html">Home</a> */}

          {/* 在react中靠router实现跳转 */}
          <div>
            <Link to="/about"><Button >About</Button></Link>
          </div>
          <div>
            <Link to="/home"><Button >Home</Button></Link>
          </div>
        </div>
        <div className='list-page'>
          {/* 注册路由 */}
          <Routes>
            <Route path='/About' element={<About />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App
