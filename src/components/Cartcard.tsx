import { CartItemType, dicreaceCartItem, increaceCartItem, removeCartItem } from '../store/cart'
import { useAppDispatch } from '../store/store'


const Cartcard = ({data}:{data:CartItemType}) => {
   const disptch=useAppDispatch()
  return (
    <div className='cartcard'>
      <img src={data.item.image} alt="" />
      <div className='description'>
        <h3>{data.item.title}</h3>
        <h4>{`Price : $${data.quantity*data.item.price}`}</h4>
        <h4>{`Quantity : ${data.quantity}`}</h4>
        <div className="btns">
            <button onClick={()=>disptch(increaceCartItem(data.item.id))}>+</button>
            <button onClick={()=>disptch(removeCartItem(data.item.id))} >Remove</button>
            <button onClick={()=>disptch(dicreaceCartItem(data.item.id))}>-</button>
        </div>
      </div>
    </div>
  )
}

export default Cartcard
