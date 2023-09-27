import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

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

const endpointsDatas=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints:(builder)=>({
        endpointsDatasGetProducts:builder.query<ProductType[], void>({
            query:()=> "products"
        }),
        endpointsDatasGetSingleProduct:builder.query<ProductType,number>({
            query:(id)=> `products/${id}`
        })
    })  
})

export default endpointsDatas
export const {useEndpointsDatasGetProductsQuery,useEndpointsDatasGetSingleProductQuery}=endpointsDatas