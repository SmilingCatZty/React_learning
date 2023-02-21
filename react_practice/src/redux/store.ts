// 引入createStore,用于创建redux中的store对象
import { createStore,applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// 引用redux-thunk
import thunk from 'redux-thunk'
// 暴露store
export default createStore(countReducer,applyMiddleware(thunk))