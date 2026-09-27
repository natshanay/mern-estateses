import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';

const rootReducer = combineReducers({user:userReducer})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const persistConfig = {
  key:'root',
  storage,
  version:1,
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
  })
});

export const persistort = persistStore(store)


