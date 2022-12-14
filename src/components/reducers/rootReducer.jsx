import { AuthReducer } from './authReducer'
import { combineReducers } from 'redux'
import {CryptoListReducer} from "./cryptoListReducer";
import {CurrencyDetailReducer} from "./currencyDetailReducer";
import { UserDetailReducer } from './userDetailReducer';

const appReducer = combineReducers({
  auth: AuthReducer,
  cryptoList: CryptoListReducer,
  currencyDetail: CurrencyDetailReducer,
  uerDetail: UserDetailReducer
})

export const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    localStorage.removeItem('persist:billing-system')
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}
