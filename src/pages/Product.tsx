import {useGetSingleProductQuery } from '../redux/endpoints'
import {useParams} from "react-router-dom"
import ProductSkeleton from './../components/ProductSkeleton';
import { useAppDispatch, useAppSelector } from '../store';
import { addToCart } from '../redux/cart';
import { BsFillCartPlusFill,BsCartCheckFill } from "react-icons/bs";

const rewrite=(arg:number)=>{
  if(arg){
    let rate= +JSON.stringify(arg)
    if(rate%.5==0){
      return arg
    }else{
      return rate-rate%.5
  }
}
}

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

const Product = () => {
    const cartDispatch=useAppDispatch()

    type idType={
        id:string
    }
    const {id}=useParams<idType>()

    const{data,isLoading,isFetching,isError}=useGetSingleProductQuery(parseInt(id as string))
    const cartItems=useAppSelector(state=>state.cartReducer.cartItems)

    const handlCart=(arg:ProductType)=>{
      cartDispatch(addToCart(arg))
    }
    
    
  return (
    <div className='product' style={isError ?{justifyContent:"center"}:{}}>
      {isLoading||isFetching ? (
          <ProductSkeleton/>
        ) : ( !isError &&(<div className="container">
        <img src={data?.image} alt="" />
        <div className="description">
            <h2>{data?.title}</h2>
            <h3>{data?.category}</h3>
            <h3>{`$${data?.price as number}`}</h3>
            <p>{data?.description}</p>
            <div className="rating">
              <img src={`/${rewrite(data?.rating.rate as number)}.svg`} alt="" />
              <p>{rewrite(data?.rating?.rate as number)}</p>
            </div>
            <div className="addandbybtns">
              <button  onClick={()=> !cartItems.some((el)=>el.item.id== +(id as string)) && handlCart(data as ProductType)} > 
              {
                !cartItems.some((el)=>el.item.id== +(id as string)) ?
                (
                  <>
                  <BsFillCartPlusFill style={{fontSize:"21px"}}/>
                  Add to cart
                  </>
                ):(
                  <>
                  <BsCartCheckFill style={{fontSize:"21px"}} />
                  Added
                  </>
                )
              }
              </button>
              <button>By now</button>
            </div>
          </div>
        </div>)
        )}
        {
        isError && (
          <div style={{padding:"16px" , border:"2px solid red", borderRadius:"4px"}}>
            <h2 style={{color:"red"}} >{"something is wrong"}</h2>
          </div>
        )
      }
    </div>
  )
}
export default Product