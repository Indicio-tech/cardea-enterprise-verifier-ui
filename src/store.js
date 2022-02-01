import { createStore, combineReducers } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import loginReducer from './redux/loginReducer'
import contactsReducer from './redux/contactsReducer'
import credentialsReducer from './redux/credentialsReducer'
import settingsReducer from './redux/settingsReducer'


const rootReducer = combineReducers({
  login: loginReducer,
  contacts: contactsReducer,
  credentials: credentialsReducer,
  settings: settingsReducer,

})


export default createStore(
  rootReducer,
  //comment out the line below this when pushing to production, use for dev work only. 
  composeWithDevTools()
)