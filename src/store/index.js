import { combineReducers, createStore } from 'redux'
import listDescription from './listItem/reducers'

const reducers = combineReducers({
  listDescription,
})

export default createStore(reducers)
