import { createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import loginReducer from './redux/loginReducer'


const rootReducer = combineReducers({
  login: loginReducer,

})


export default createStore(
  rootReducer,
  //comment out the line below this when pushing to production, use for dev work only. 
  composeWithDevTools()
)