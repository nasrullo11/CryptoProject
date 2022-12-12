import { AuthReducer } from './authReducer'
import { combineReducers } from 'redux'
import {CryptoListReducer} from "./cryptoListReducer";
import {CurrencyDetailReducer} from "./currencyDetailReducer";
import { UserDetailReducer } from './userDetailReducer';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  cryptoList: CryptoListReducer,
  currencyDetail: CurrencyDetailReducer,
  uerDetail: UserDetailReducer
})