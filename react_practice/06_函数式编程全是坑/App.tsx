import React from 'react'
import { Button } from 'antd';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header';
import MyNavlink from './component/MyNavlink'
import Message from './pages/Home/Message'
import News from './pages/Home/News'
import Detail from './pages/Home/Message/detail'





const App: React.FC = (props) => {
  return (
    <div className='App'>
      <div className='App-contain'>
        <Header />
        <div className="list-group">
          {/* 在原生js中用<a></a>跳转 */}
          {/* <a className="list-group-item active" href="./about.html">About</a> */}
          {/* <a className="list-group-item" href="./home.html">Home</a> */}

          {/* 在react中靠router实现跳转 */}
          <div>
            <MyNavlink to="/about"><Button >About</Button></MyNavlink>
          </div>
          <div>
            <MyNavlink to="/home"><Button >Home</Button></MyNavlink>
          </div>
        </div>
        <div className='list-page'>
          {/* 注册路由 */}
          <Routes >
            <Route path='/about/*' element={<About />} />
            <Route path='/home/*' element={<Home />} >
              <Route path='news' element={<News />} />
              <Route path='message/*' element={<Message {...props} />} >
                {/* 声明接受params参数 */}
                <Route path='detail/:id' element={<Detail {...props} />} />

                {/* 声明接受search参数,正常接收即可 */}
                {/* <Route path='detail' element={<Detail {...props} />} /> */}

                {/* 声明接受state参数,正常接收即可 */}
                {/* <Route path='detail' element={<Detail {...props} />} /> */}
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App
