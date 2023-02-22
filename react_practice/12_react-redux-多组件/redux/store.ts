// 引入createStore,用于创建redux中的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import MixReducer from './reducers/mix'
// 引用redux-thunk,使我们可以在action中返回函数,而不是只能返回一个对象,支持异步返回对象
import thunk from 'redux-thunk'

// 汇总reducer
const allReducer = combineReducers(
  {
    Count: countReducer,
    Person: personReducer,
    Mix: MixReducer
  })
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))