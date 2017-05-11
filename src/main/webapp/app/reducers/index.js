import {combineReducers} from 'redux'
import {loginUser, registerUser} from './authentication'
import {searchedLocation} from './data'

const rootReducer = combineReducers({loginUser,registerUser,searchedLocation})

export default rootReducer
