import { AuthReducer } from './authReducer'
import { combineReducers } from 'redux'
import {CryptoListReducer} from "./cryptoListReducer";
import {CurrencyDetailReducer} from "./currencyDetailReducer";
import { UserDetailReducer } from './userDetailReducer';
import {UserCryptoReducer} from "./userCryptoReducer";
import {BuyCryptoReducer} from "./buyCryptoReducer";
import {SellCryptoReducer} from "./sellCryptoReducer";

const appReducer = combineReducers({
  auth: AuthReducer,
  cryptoList: CryptoListReducer,
  currencyDetail: CurrencyDetailReducer,
  uerDetail: UserDetailReducer,
  userCrypto: UserCryptoReducer,
  buyCrypto: BuyCryptoReducer,
  sellCrypto: SellCryptoReducer,
})

export const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    localStorage.removeItem('persist:billing-system')
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}
