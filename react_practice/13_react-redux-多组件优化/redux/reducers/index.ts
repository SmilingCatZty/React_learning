import countReducer from './count'
import personReducer from './person'
import MixReducer from './mix'
import { combineReducers } from 'redux'

export default combineReducers({
  Count: countReducer,
  Person: personReducer,
  Mix: MixReducer
})