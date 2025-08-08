// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage for web
import authStateSlice from './features/authState/authStateSlice';

// 1️⃣ Persist config for auth slice
const persistConfig = {
  key: 'auth',     // unique key for storage
  storage,         // storage engine
  version: 1,
};

// 2️⃣ Create persisted reducer for authState
const persistedAuthReducer = persistReducer(persistConfig, authStateSlice);

// 3️⃣ Configure store
export const store = configureStore({
  reducer: {
    authStateSlice: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

// 4️⃣ Persistor instance
export const persistor = persistStore(store);
