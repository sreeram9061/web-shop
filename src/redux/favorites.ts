import { createSlice} from "@reduxjs/toolkit"
import { ProductType } from "./endpoints"

type FavStateType={
    favoriteItems:ProductType[]
}

const initialState:FavStateType={
    favoriteItems:[]
}

const favorite=createSlice({
    name:'favoriteslice',
    initialState,
    reducers:{
        addToFavoriteItem:(state,action)=>{
            state.favoriteItems.push(action.payload)
        },
        removeFavoriteItem:(state,action)=>{
            state.favoriteItems=state.favoriteItems.filter((el)=>el.id!=action.payload)
        }
    }
})

export default favorite.reducer
export const{addToFavoriteItem,removeFavoriteItem}=favorite.actions