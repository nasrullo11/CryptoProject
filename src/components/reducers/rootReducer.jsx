import { AuthReducer } from './authReducer'
import { combineReducers } from 'redux'
import {CryptoListReducer} from "./cryptoListReducer";
import {CurrencyDetailReducer} from "./currencyDetailReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  cryptoList: CryptoListReducer,
  currencyDetail: CurrencyDetailReducer,
})