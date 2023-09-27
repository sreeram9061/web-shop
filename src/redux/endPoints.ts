import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export type ProductType={
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

export const endPointsDatas=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints:(builder)=>({
        getProducts:builder.query<ProductType[], void>({
            query:()=> "products"
        }),
        getSingleProduct:builder.query<ProductType,number>({
            query:(id)=> `products/${id}`
        })
    })  
})

export const {useGetProductsQuery,useGetSingleProductQuery}=endPointsDatas