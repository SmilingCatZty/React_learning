import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  /* provider包裹组件，目的是使app后代所有容器都能收到store */
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
