import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'billing-system',
  storage,
  whitelist: ['auth'],
}

const persistReduce = persistReducer(persistConfig, rootReducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistReduce, composeEnhancer(applyMiddleware(thunk)))
export const persistor = persistStore(store)
