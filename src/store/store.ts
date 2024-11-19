import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './carrinho'
import { apiSlice } from './apiSlice';

const store = configureStore({
    reducer: {
    cart: carrinhoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
