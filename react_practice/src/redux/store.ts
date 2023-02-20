// 引入createStore,用于创建redux中的store对象
import { createStore } from 'redux'
import countReducer from './count_reducer'

// 暴露store
export default createStore(countReducer)