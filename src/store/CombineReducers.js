import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from './reducers/DashboardReducer'
import LoginReducer from './reducers/LoginReducer'

const CombineReducers = combineReducers({
  dashboard: DashboardReducer,
  form: formReducer,
  login: LoginReducer
})

export default CombineReducers
