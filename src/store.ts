import {configureStore} from "@reduxjs/toolkit"
import favoriteReducer from './redux/favorites';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { endpointsDatas } from "./redux/endpoints";
import cartReducer from "./redux/cart";

export const store = configureStore({

    reducer: {
        [endpointsDatas.reducerPath]: endpointsDatas.reducer,
        favoriteReducer,
        cartReducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(endpointsDatas.middleware),
})

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export const useAppDispatch=()=>useDispatch<typeof store.dispatch>()