import { ProductType } from '../redux/endPoints';
import {useNavigate} from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useRef}from"react"
import { useAppDispatch, useAppSelector } from '../store';
import { addToFavoriteItem, removeFavoriteItem } from '../redux/favorites';



const Card = ({data}:{data:ProductType}) => {

    const navigate=useNavigate()
    const labelRef= useRef<HTMLLabelElement|null>(null)
    const favoriteItems=useAppSelector(state=>state?.favoriteReducer?.favoriteItems)

    const favDispatch=useAppDispatch()

    const handleClick=(arg:ProductType)=>{
      if(favoriteItems?.some(el=>el.id==arg.id)){
        favDispatch(removeFavoriteItem(arg.id))
      }else{
        favDispatch(addToFavoriteItem(arg))
      }
    }

  return (
    <div className='card' >
        <img src={data.image} onClick={()=> navigate(`/product/${data.id}`)  } alt="" />
        <div className="discprition">
            <h4>{data.title}</h4>
            <div className="rating">
              <img src="rating.svg" alt="" />
              <p>{`Rating  ${data.rating.rate}`}</p>
            </div>
            <h4>{`Price $${data.price}`}</h4>
        </div>
        <label ref={labelRef} className='favourite'>
          <AiFillHeart onClick={()=>handleClick(data)} style={favoriteItems?.some(el=>el.id==data.id)&&{color:"red"}} />
        </label>
    </div>
  )
}


export default Card 
