import {configureStore} from "@reduxjs/toolkit"
import favoriteReducer from './redux/favorites';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { endPointsDatas } from "./redux/endPoints";
import cartReducer from "./redux/cart";

export const store = configureStore({

    reducer: {
        [endPointsDatas.reducerPath]: endPointsDatas.reducer,
        favoriteReducer,
        cartReducer
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(endPointsDatas.middleware),
})

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
export const useAppDispatch=()=>useDispatch<typeof store.dispatch>()