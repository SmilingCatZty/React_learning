import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  /* provider包裹组件，目的是使app后代所有容器都能收到store */
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
