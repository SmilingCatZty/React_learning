/**
 * 入口文件
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 **/
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // React.StrictMode组件包裹，用于检查 <App /> 中的代码
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
