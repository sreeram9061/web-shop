import { createSlice} from "@reduxjs/toolkit"

type ProductType={
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
  }

export type CartItemType={
    item:ProductType,
    quantity:number
}

type StateType={
    cartItems:CartItemType[]
}

const initialState:StateType={
    cartItems:[]
}

const cart =createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push({item:action.payload,quantity:1})
        },
        removeCartItem:(state,action)=>{
            state.cartItems=state.cartItems.filter(el=>el.item.id!=action.payload)
        },
        increaceCartItem:(state,action)=>{
            state.cartItems.forEach((item)=>{
                if(item.item.id==action.payload){
                    item.quantity++;
                }
            })
        },
        dicreaceCartItem:(state,action)=>{
            state.cartItems.forEach((item)=>{
                if(item.item.id==action.payload){
                    item.quantity--;
                }
                if(item.quantity<1){
                    state.cartItems=state.cartItems.filter(el=>el.item.id!=action.payload)
                }
            })
        },
    }
})

export default cart.reducer
export const {addToCart,removeCartItem,increaceCartItem,dicreaceCartItem}=cart.actions