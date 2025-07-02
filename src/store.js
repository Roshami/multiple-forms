import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productBasicDetailsReducer from "./routers/utilities/slice/productBasicDetailsSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product'] // which reducer want to store
}

const rootReducer = combineReducers({
    product: productBasicDetailsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        productDetails : persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store)

export { store, persistor };