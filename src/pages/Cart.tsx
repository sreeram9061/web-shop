import React from 'react'
import { useAppSelector } from '../store'
import Emty from '../components/Emty'
import Cartcard from '../components/Cartcard'

const Cart = () => {
 const cartItems =useAppSelector(state=>state.cartReducer.cartItems)
  return (
    <>
    {
      cartItems.length==0 ? (
        <div className="emty_cart">
          <Emty section='Cart' />
        </div>
      ) :(
        <div className='cart'>
          <div className="cart_container">
            {
              cartItems.map((item)=>{
                return <Cartcard data={item} />
              })
            }
          </div>
          <div className="cart_total">
            <h3>Price details</h3>
            <p>Discount : 0</p>
            <p>Delivery Charges : $3</p>
            <h3>{`Total Emount : $${cartItems.reduce((acc,cur)=> cur.item.price*cur.quantity+acc,0)+3}`}</h3>
          </div>
        </div>
      )
    }
    
    </>
  )
}

export default Cart
