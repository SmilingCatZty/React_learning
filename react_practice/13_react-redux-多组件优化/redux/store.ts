// 引入createStore,用于创建redux中的store对象
import { createStore, applyMiddleware } from 'redux'

import AllReducer from './reducers/index'
// 引用redux-thunk,使我们可以在action中返回函数,而不是只能返回一个对象,支持异步返回对象
import thunk from 'redux-thunk'

// 暴露store
export default createStore(AllReducer, applyMiddleware(thunk))